document.querySelector(".burger__icon").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".burger__menu").classList.toggle("open");
});
