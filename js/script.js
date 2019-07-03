var link = document.querySelector(".button-send");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
    popup.classList.remove("modal-show");
});