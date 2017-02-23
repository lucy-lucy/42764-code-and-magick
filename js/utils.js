'use strict';

window.utils = (function () {
  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getRandomElementExcept = function (array, element) {
    var randomElement = null;

    while (randomElement === null || randomElement === element) {
      randomElement = getRandomElement(array);
    }

    return randomElement;
  };

  return {
    getRandomElement: getRandomElement,
    getRandomElementExcept: getRandomElementExcept
  };
})();
