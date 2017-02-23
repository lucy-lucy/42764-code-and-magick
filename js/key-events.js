'use strict';

window.keyEvents = (function () {
  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;

  var isKeyboardEvent = function (evt) {
    return typeof evt.keyCode !== 'undefined';
  };

  var isEnterPressed = function (evt) {
    return isKeyboardEvent(evt) && evt.keyCode === ENTER_KEY_CODE;
  };

  var isEscPressed = function (evt) {
    return isKeyboardEvent(evt) && evt.keyCode === ESC_KEY_CODE;
  };

  return {
    isEnterPressed: isEnterPressed,
    isEscPressed: isEscPressed
  };
})();
