import '../css/style.css';
import hexToRGB from './hextorgb.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const paintBucket = document.querySelector('#paint-bucket');
const colorPicker = document.querySelector('#color-picker');
const pencil = document.querySelector('#pencil');
const colorInput = document.querySelector('#input_color');
const currentColorEl = document.querySelector('#current-color-element');
const currentColorMark = document.querySelector('#current_color-mark');
const prevColor = document.querySelector('#color-prev-mark');
const colorsList = document.querySelector('#colors-list');
const sizeSwitcher = document.querySelector('#size-switcher');
const sizeSwitcher128 = document.querySelector('#size_switcher--input_128x128');
const sizeSwitcher256 = document.querySelector('#size_switcher--input_256x256');
const sizeSwitcher512 = document.querySelector('#size_switcher--input_512x512');
const reset = document.querySelector('#reset');
const load = document.querySelector('#load');
const city = document.querySelector('#city');
const bw = document.querySelector('#bw');
const error = document.querySelector('#error');
const errorClose = document.querySelector('#error-close');
const login = document.getElementById('login');
// const outputText = document.getElementById('output');


let isImgLoaded = 'false';
let currentColor = 'rgb(196, 196, 196)';
canvas.width = 128;
canvas.height = 128;
let pixelSize = 512 / canvas.width;

function showError() {
  error.classList.add('error-shown');
}

function closeError() {
  error.classList.remove('error-shown');
}

function setDataOnStorage() {
  localStorage.setItem('canvasImage', canvas.toDataURL());
  localStorage.setItem('lastColor', currentColor);
  localStorage.setItem('canvasWidth', canvas.width);
  localStorage.setItem('canvasHeight', canvas.height);
  localStorage.setItem('isEmpty', 'false');
  localStorage.setItem('isImgLoaded', isImgLoaded);
}

function floodArea(evt) {
  const x1 = Math.floor(evt.offsetX / pixelSize);
  const y1 = Math.floor(evt.offsetY / pixelSize);
  const rgb = ctx.getImageData(x1, y1, 1, 1).data;
  const startColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  ctx.fillStyle = currentColor;
  const stack = new Set();
  const fill = (coords) => {
    const c = (coords).split('_');
    const x = +c[0];
    const y = +c[1];
    ctx.fillRect(x, y, 1, 1);
  };
  const walk = (coords) => {
    const c = coords.split('_');
    const x = +c[0];
    const y = +c[1];
    const { data } = ctx.getImageData(x, y, 1, 1);
    const color = `rgb(${data[0]},${data[1]},${data[2]})`;
    if (startColor === color && x > -1 && y > -1 && x < canvas.width && y < canvas.height) {
      stack
        .add(`${x - 1}_${y}`)
        .add(`${x + 1}_${y}`)
        .add(`${x}_${y + 1}`)
        .add(`${x}_${y - 1}`);
    } else {
      stack.delete(`${x}_${y}`);
    }
  };
  stack.add(`${x1}_${y1}`);

  stack.forEach((value) => {
    walk((value));
  });
  stack.forEach((value) => {
    fill((value));
  });
  setDataOnStorage();
}

function pickColor(evt) {
  const { data } = ctx.getImageData(Math.floor(evt.offsetX / pixelSize), Math.floor(evt.offsetY / pixelSize), 1, 1);
  const pickedColor = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
  if (pickedColor !== currentColor) {
    prevColor.style.backgroundColor = currentColor;
    currentColor = pickedColor;
    currentColorMark.style.backgroundColor = currentColor;
  }
}

function drawPencil(evt) {
  let isDrawing = true;
  let lastX = evt.offsetX;
  let lastY = evt.offsetY;
  ctx.fillStyle = currentColor;
  ctx.fillRect(Math.floor(evt.offsetX / pixelSize), Math.floor(evt.offsetY / pixelSize), 1, 1);

  function draw(e) {
    if (!isDrawing) return;
    const newX = e.offsetX;
    const newY = e.offsetY;
    const dX = Math.abs(newX - lastX);
    const dY = Math.abs(newY - lastY);
    const sx = lastX < newX ? 1 : -1;
    const sy = lastY < newY ? 1 : -1;
    let err = dX - dY;
    while ((lastX !== newX && lastY !== newY)) {
      const e2 = 2 * err;
      if (e2 > -dY) {
        err -= dY;
        lastX += sx;
      }
      if (e2 < dX) {
        err += dX;
        lastY += sy;
      }
      ctx.fillRect(Math.floor(lastX / pixelSize), Math.floor(lastY / pixelSize), 1, 1);
    }
  }
  function stopDrawing() {
    isDrawing = false;
    canvas.removeEventListener('mousemove', draw);
    canvas.removeEventListener('mouseup', stopDrawing);
    canvas.removeEventListener('mouseout', stopDrawing);
    setDataOnStorage();
  }
  if (isDrawing) {
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
  }
}

function toGrayScale() {
  if (isImgLoaded !== 'true') {
    showError();
    setTimeout(closeError, 3000);
  } else {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data } = imageData;
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
    setDataOnStorage();
  }
}

function showImage(data) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.src = data;
  ctx.imageSmoothingEnabled = false;
  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.msImageSmoothingEnabled = false;
  img.onload = () => {
    const width = (canvas.width * img.width) / img.height;
    const height = (canvas.height * img.height) / img.width;
    const x = (canvas.width - width) / 2;
    const y = (canvas.height - height) / 2;
    if (img.width > img.height) {
      ctx.drawImage(img, 0, y, canvas.width, height);
    } else {
      ctx.drawImage(img, x, 0, width, canvas.height);
    }
    setDataOnStorage();
  };
}

function getDataFromStorage() {
  if (localStorage.getItem('isEmpty') !== 'true') {
    currentColor = localStorage.getItem('lastColor');
    currentColorMark.style.backgroundColor = currentColor;
    canvas.width = localStorage.getItem('canvasWidth');
    canvas.height = localStorage.getItem('canvasHeight');
    pixelSize = 512 / canvas.width;
    if (canvas.width === 128) {
      sizeSwitcher128.setAttribute('checked', 'checked');
    } else if (canvas.width === 256) {
      sizeSwitcher256.setAttribute('checked', 'checked');
    } else if (canvas.width === 512) {
      sizeSwitcher512.setAttribute('checked', 'checked');
    }
    isImgLoaded = localStorage.getItem('isImgLoaded');
    const dataURL = localStorage.getItem('canvasImage');
    showImage(dataURL);
    localStorage.setItem('isEmpty', 'true');
  }
}

function onPaintBucketClick() {
  paintBucket.classList.add('tools--item-active');
  pencil.classList.remove('tools--item-active');
  colorPicker.classList.remove('tools--item-active');
  canvas.removeEventListener('click', pickColor);
  canvas.removeEventListener('mousedown', drawPencil);
  canvas.addEventListener('mousedown', floodArea);
}

function onColorPickerClick() {
  colorPicker.classList.add('tools--item-active');
  paintBucket.classList.remove('tools--item-active');
  pencil.classList.remove('tools--item-active');
  canvas.removeEventListener('mousedown', drawPencil);
  canvas.removeEventListener('mousedown', floodArea);
  canvas.addEventListener('click', pickColor);
}

function onPencilClick() {
  pencil.classList.add('tools--item-active');
  paintBucket.classList.remove('tools--item-active');
  colorPicker.classList.remove('tools--item-active');
  canvas.removeEventListener('click', pickColor);
  canvas.removeEventListener('mousedown', floodArea);
  canvas.addEventListener('mousedown', drawPencil);
}

function onChooseColorClick(evt) {
  if ((evt.target !== colorInput) && (evt.target !== currentColorEl)) {
    const newStyle = getComputedStyle(evt.target.firstElementChild).getPropertyValue('background-color');
    if (newStyle !== currentColor) {
      prevColor.style.backgroundColor = currentColor;
      currentColor = newStyle;
      currentColorMark.style.backgroundColor = currentColor;
    }
  }
}

function onKeyDown(evt) {
  switch (evt.keyCode) {
    case 66:
      onPaintBucketClick();
      break;
    case 80:
      onPencilClick();
      break;
    case 67:
      onColorPickerClick();
      break;
    default:
      break;
  }
}

async function getData(url) {
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    showImage(data.urls.small);
    isImgLoaded = 'true';
  } catch (e) {
    throw new Error(e);
  }
}

pencil.addEventListener('click', onPencilClick);
colorsList.addEventListener('click', onChooseColorClick);
colorPicker.addEventListener('click', onColorPickerClick);
paintBucket.addEventListener('click', onPaintBucketClick);
colorInput.addEventListener('change', () => {
  prevColor.style.backgroundColor = currentColor;
  currentColor = hexToRGB(colorInput.value);
  currentColorMark.style.backgroundColor = currentColor;
});

sizeSwitcher.addEventListener('change', (evt) => {
  switch (evt.target.value) {
    case '512x512':
      canvas.width = 512;
      canvas.height = 512;
      pixelSize = 512 / canvas.width;
      break;
    case '256x256':
      canvas.width = 256;
      canvas.height = 256;
      pixelSize = 512 / canvas.width;
      break;
    case '128x128':
      canvas.width = 128;
      canvas.height = 128;
      pixelSize = 512 / canvas.width;
      break;
    default:
      break;
  }
  const dataUrl = localStorage.getItem('canvasImage');
  if (dataUrl) {
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }
});
reset.addEventListener('click', () => {
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  localStorage.removeItem('canvasImage');
  localStorage.removeItem('isImgLoaded');
  isImgLoaded = 'false';
});

window.addEventListener('keydown', onKeyDown);
errorClose.addEventListener('click', closeError);


window.onbeforeunload = () => {
  setDataOnStorage();
};

window.addEventListener('DOMContentLoaded', () => {
  onPencilClick();
  getDataFromStorage();
});


load.addEventListener('click', () => {
  const ac = '7f574e25821340fc3ce38f12fd82f01a175f9294ad0d21f6fe57adaeb8406446';
  const town = city.value;
  const url = `https://api.unsplash.com/photos/random?query=town,${town}&client_id=${ac}`;
  getData(url);
});

bw.addEventListener('click', toGrayScale);

login.addEventListener('click', (e) => {
  e.preventDefault()
  const authenticator = new netlify.default ({})
  authenticator.authenticate({provider:"github", scope: "user"}, (err, data) => {
    err ? login.innerText = "Error Authenticating with GitHub: " + err : 
    login.innerText = "Authenticated with GitHub. Access Token: " + data.token
  })
});