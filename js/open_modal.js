document.addEventListener("DOMContentLoaded", function () {
  // Отримання всіх потрібних кнопок
  const loginBtns = document.querySelectorAll(
    ".button-login, .button-price-login"
  );
  const signUpBtns = document.querySelectorAll(
    ".button-sign-up, .button-price-sign-up, .modal__login-sing-up"
  );
  const priceBtns = document.querySelectorAll(".price-section__button");
  const closeBtns = document.querySelectorAll(".modal__closes");

  // Вікна-модалки
  const modalLogin = document.querySelector(".modal-login");
  const modalSignUp = document.querySelector(".modal-sign-up");
  const modalPrice = document.querySelector(".modal-price-selection");

  // Функція відкриття модалки
  function showModal(modal) {
    hideAllModals(); // Закрити всі перед відкриттям
    if (modal) {
      modal.classList.add("active");
      document.body.classList.add("no-scroll");
    }
  }

  // Функція закриття всіх модалок
  function hideAllModals() {
    document
      .querySelectorAll(".modal-login, .modal-sign-up, .modal-price-selection")
      .forEach((modal) => {
        modal.classList.remove("active");
      });
    document.body.classList.remove("no-scroll");
  }

  // Відкриття modal-login
  loginBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      showModal(modalLogin);
    });
  });

  // Відкриття modal-sign-up
  signUpBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // на випадок, якщо <a href="">
      showModal(modalSignUp);
    });
  });

  // Відкриття modal-price-selection
  priceBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      showModal(modalPrice);
    });
  });

  // Закриття модалок по ✖
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      hideAllModals();
    });
  });

  document
    .querySelectorAll(".modal-login, .modal-sign-up, .modal-price-selection")
    .forEach((modal) => {
      modal.addEventListener("click", function (e) {
        const modalContent = modal.querySelector("div");
        if (!modalContent.contains(e.target)) {
          hideAllModals();
        }
      });
    });
});
