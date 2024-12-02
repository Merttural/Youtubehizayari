const navbar = document.querySelector('.ytp-chrome-controls');
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Speed Control';
toggleButton.id = 'toggle-speed-controls';

const controlsContainer = document.createElement('div');
controlsContainer.id = 'speed-controls-container';
controlsContainer.style.display = 'none';

// Slider ve hız etiketi (label) oluştur
const speedSlider = document.createElement('input');
speedSlider.type = 'range';
speedSlider.min = '0.1';
speedSlider.max = '10';
speedSlider.step = '0.1';
speedSlider.value = '1';
speedSlider.id = 'speed-slider';

const speedLabel = document.createElement('span');
speedLabel.id = 'speed-label';
speedLabel.innerText = `Speed: ${speedSlider.value}x`;

speedSlider.addEventListener('input', () => {
    document.querySelector('video').playbackRate = speedSlider.value;
    speedLabel.innerText = `Speed: ${speedSlider.value}x`;
});

controlsContainer.appendChild(speedLabel);
controlsContainer.appendChild(speedSlider);

toggleButton.addEventListener('click', () => {
  if (controlsContainer.style.display === 'none') {
    controlsContainer.style.display = 'flex';
  } else {
    controlsContainer.style.display = 'none';
  }
});

navbar.appendChild(toggleButton);
navbar.appendChild(controlsContainer);
