'use strict';

(function () {
  var ESC = 27;

  var cart = document.querySelectorAll(".main-link--js");
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

  for (var i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", openPopup);
  }

})();
