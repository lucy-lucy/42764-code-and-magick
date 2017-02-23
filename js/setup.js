'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');

var setupClose = setup.querySelector('.setup-close');

var userName = setup.querySelector('.setup-user-name');

var wizardCoat = setup.querySelector('#wizard-coat');
var wizardEyes = setup.querySelector('#wizard-eyes');

var fireball = setup.querySelector('.setup-fireball-wrap');

var setupSubmit = setup.querySelector('.setup-submit');

var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

var isEnterPressed = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

var isEscPressed = function (evt) {
  return evt.keyCode && evt.keyCode === ESC_KEY_CODE;
};

var deactivateEvent = function (evt) {
  setup.classList.toggle('invisible', isEscPressed(evt));
};

var activateEvent = function (evt) {
  if (isEnterPressed(evt)) {
    hideSetup();
  }
};

var showSetup = function () {
  setup.classList.remove('invisible');
  setup.setAttribute('aria-hidden', false);
  document.addEventListener('keydown', deactivateEvent);
  setupClose.addEventListener('click', hideSetup);
  setupClose.addEventListener('keydown', activateEvent);
  setupSubmit.addEventListener('click', hideSetupWithPrevention);
};

var hideSetupWithPrevention = function (evt) {
  evt.preventDefault();
  hideSetup();
};

var hideSetup = function () {
  setup.classList.add('invisible');
  setup.setAttribute('aria-hidden', true);
  document.removeEventListener('keydown', deactivateEvent);
  setupClose.removeEventListener('click', hideSetup);
  setupClose.removeEventListener('keydown', activateEvent);
  setupSubmit.removeEventListener('click', hideSetupWithPrevention);
};


setupOpen.addEventListener('click', showSetup);

setupOpen.addEventListener('keydown', function (evt) {
  if (isEnterPressed(evt)) {
    showSetup();
  }
});


userName.required = true;
userName.maxLength = 50;


window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');
window.colorizeElement(wizardEyes, wizardEyesColors, 'fill');
window.colorizeElement(fireball, fireballColors, 'backgroundColor');
