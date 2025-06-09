document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".button-login");
  const signUpBtn = document.querySelector(".button-sign-up");
  const loginModalWrapper = document.querySelector(".modal__login-wrapper");
  const signUpModalWrapper = document.querySelector(".modal__sign-up-wrapper");
  const closeButtons = document.querySelectorAll(".modal__closes");
  const switchToSignUp = document.querySelector(".modal__login-sing-up");
  const modals = document.querySelectorAll(".modal");

  // Відкриття модалки логіну
  loginBtn.addEventListener("click", () => {
    showModal(loginModalWrapper);
  });

  // Відкриття модалки реєстрації
  signUpBtn.addEventListener("click", () => {
    showModal(signUpModalWrapper);
  });

  // Закриття модалок по кнопці ✖
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      hideAllModals();
    });
  });

  // Перехід з логіну до реєстрації
  switchToSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    loginModalWrapper.classList.remove("active");
    signUpModalWrapper.classList.add("active");
    modals.forEach((modal) => modal.classList.add("active"));
  });

  // Функції
  function showModal(modalWrapper) {
    hideAllModals();
    modalWrapper.classList.add("active");
    modalWrapper.closest(".modal").classList.add("active");
    document.body.classList.add("no-scroll");
  }

  function hideAllModals() {
    document
      .querySelectorAll(".modal__login-wrapper, .modal__sign-up-wrapper")
      .forEach((wrapper) => {
        wrapper.classList.remove("active");
      });
    modals.forEach((modal) => modal.classList.remove("active"));
    document.body.classList.remove("no-scroll");
  }
});
