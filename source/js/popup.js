'use strict';

(function () {
  var ESC = 27;

  var link = document.querySelector(".main-link--hit");
  var popup = document.querySelector(".modal--change-size");

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC) {
      closePopup();
    }
  }

  var closePopup = function () {
    popup.classList.remove("modal--show");
    document.removeEventListener('keydown', onPopupEscPress);
  }

  var openPopup = function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
    document.addEventListener('keydown', onPopupEscPress);
  }

  link.addEventListener("click", openPopup);

})();
