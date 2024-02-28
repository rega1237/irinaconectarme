const modalOnlinePrices = () => {
  // Modal Taller

  const buttonShow = document.getElementById("button-show-taller");
  const modalTaller = document.getElementById("modal-taller");
  const closeButton = document.getElementById("close-button-taller");

  // Modal Taller + session

  const buttonShowTallerSesion = document.getElementById(
    "button-show-taller-sesion"
  );
  const modalTallerSesion = document.getElementById("modal-taller-sesion");
  const closeButtonTallerSesion = document.getElementById(
    "close-button-taller-sesion"
  );

  buttonShow.addEventListener("click", () => {
    modalTaller.classList.remove("hidden");
  });

  closeButton.addEventListener("click", () => {
    modalTaller.classList.toggle("hidden");
  });

  buttonShowTallerSesion.addEventListener("click", () => {
    modalTallerSesion.classList.remove("hidden");
  });

  closeButtonTallerSesion.addEventListener("click", () => {
    modalTallerSesion.classList.toggle("hidden");
  });
};

export default modalOnlinePrices