/*
var stripe = Stripe(
  "pk_live_51NReEuIGlS0wzkKX1VMpnQgRpvPkjrDlU1EPXTKUKsVTyBuNPXeoGyQRLTRAuUp16uTrgWjJKamTdh2fFfsXLxGZ00lKKS2BHt"
);

document.getElementById("checkout").addEventListener("click", (e) => {
  stripe.redirectToCheckout({
    lineItems: [
      {
        price: "price_1NUpm6IGlS0wzkKXy6r7NiI3",
        quantity: 1,
      }
    ],
    mode: "payment",
    successUrl: "https://irinafaneite.com/success",
    cancelUrl: "https://irinafaneite.com/presencial",
  }).then(function (result) {
    if (result.ok) {
      console.log("ok");
    } else {
      console.log("error");
    }
  });
});
*/

function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const emailInput = document.getElementById("email").value;
  const label = document.getElementById("label");

  if (emailInput.match(validRegex)) {
    return true;
  } else {
    label.innerHTML = "Por favor introduce un email valido";
    setTimeout(() => {
      label.innerHTML = "";
    }, 3000);
    return false;
  }
}

/*
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      const emailInput = document.getElementById("email").value;
      const label = document.getElementById("label");
      event.preventDefault();
      if (!validateEmail(emailInput)) return;
      emailjs
        .send("service_6yordkl", "template_mfb893u", {
          email: emailInput,
        })
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("contact-form").reset();
            label.innerHTML = "Gracias por suscribirte";
          },
          function (error) {
            label.innerHTML = "Ocurrió un error, por favor intenta de nuevo"
            console.log("FAILED...", error);
          }
        );
    });
};
*/

buttonShow = document.getElementById("button-show-taller");
modalTaller = document.getElementById("modal-taller");
closeButton = document.getElementById("close-button-taller")

buttonShowTallerSesion = document.getElementById("button-show-taller-sesion");
modalTallerSesion = document.getElementById("modal-taller-sesion");
closeButtonTallerSesion = document.getElementById("close-button-taller-sesion")

buttonShow.addEventListener("click", () => {
  modalTaller.classList.remove("hidden")
})

closeButton.addEventListener("click", () => {
  modalTaller.classList.toggle("hidden")
});

buttonShowTallerSesion.addEventListener("click", () => {
  modalTallerSesion.classList.remove("hidden")
})

closeButtonTallerSesion.addEventListener("click", () => {
  modalTallerSesion.classList.toggle("hidden")
});
