'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');

if (setup) {
  var setupClose = setup.querySelector('.setup-close');

  var userName = setup.querySelector('.setup-user-name');

  var wizardCoat = setup.querySelector('#wizard-coat');
  var wizardEyes = setup.querySelector('#wizard-eyes');

  var fireball = setup.querySelector('.setup-fireball-wrap');
}

var wizardCoatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomColor = function (colors) {
  return colors[Math.floor(Math.random() * colors.length)];
};

if (setupOpen) {
  setupOpen.addEventListener('click', function () {
    setup.classList.remove('invisible');
  });
}

if (setupClose) {
  setupClose.addEventListener('click', function () {
    setup.classList.add('invisible');
  });
}

if (userName) {
  userName.required = true;
  userName.maxLength = 50;
}

if (wizardCoat) {
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = getRandomColor(wizardCoatColor);
  });
}

if (wizardEyes) {
  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = getRandomColor(wizardEyesColor);
  });
}

if (fireball) {
  fireball.addEventListener('click', function () {
    fireball.style.background = getRandomColor(fireballColor);
  });
}
