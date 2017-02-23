'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');

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

  var onSetupClose = null;


  var showSetup = function (callback) {
    setup.classList.remove('invisible');
    setup.setAttribute('aria-hidden', false);
    document.addEventListener('keydown', hideSetupByEsc);
    setupClose.addEventListener('click', hideSetup);
    setupClose.addEventListener('keydown', hideSetupByEnter);
    setupSubmit.addEventListener('click', hideSetupWithPrevention);

    onSetupClose = callback;
  };

  var showSetupByEnter = function (evt) {
    if (window.keyEvents.isEnterPressed(evt)) {
      showSetup(function () {
        setupOpen.focus();
      });
    }
  };


  var hideSetup = function () {
    setup.classList.add('invisible');
    setup.setAttribute('aria-hidden', true);
    document.removeEventListener('keydown', hideSetupByEsc);
    setupClose.removeEventListener('click', hideSetup);
    setupClose.removeEventListener('keydown', hideSetupByEnter);
    setupSubmit.removeEventListener('click', hideSetupWithPrevention);

    if (typeof onSetupClose === 'function') {
      onSetupClose();
    }
  };

  var hideSetupByEsc = function (evt) {
    if (window.keyEvents.isEscPressed(evt)) {
      hideSetup();
    }
  };

  var hideSetupByEnter = function (evt) {
    if (window.keyEvents.isEnterPressed(evt)) {
      hideSetup();
    }
  };

  var hideSetupWithPrevention = function (evt) {
    evt.preventDefault();
    hideSetup();
  };


  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };


  setupOpen.addEventListener('click', showSetup);
  setupOpen.addEventListener('keydown', showSetupByEnter);


  userName.required = true;
  userName.maxLength = 50;


  window.colorizeElement(wizardCoat, wizardCoatColors, fillElement);
  window.colorizeElement(wizardEyes, wizardEyesColors, fillElement);
  window.colorizeElement(fireball, fireballColors, changeElementBackground);
})();
