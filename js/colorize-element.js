'use strict';

(function () {
  window.colorizeElement = function (element, colors, callback) {
    var currentColor = colors[0];

    var setRandomColor = function () {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      callback(element, currentColor);
    };

    var setRandomColorByKey = function (evt) {
      if (window.keyEvents.isEnterPressed(evt)) {
        setRandomColor();
      }
    };

    element.addEventListener('click', setRandomColor);
    element.addEventListener('keydown', setRandomColorByKey);
  };
})();
