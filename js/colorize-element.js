'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = element.style[property];

  var colorizeRandomColor = function () {
    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = currentColor;
  };

  var colorizeRandomColorByKey = function (evt) {
    if (window.isEnterPressed(evt)) {
      colorizeRandomColor();
    }
  };

  element.addEventListener('click', colorizeRandomColor);
  element.addEventListener('keydown', colorizeRandomColorByKey);
};
