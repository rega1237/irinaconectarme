/*
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


function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const emailInput = input;
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

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email").value;
    const label = document.getElementById("label");
    event.preventDefault();
    if (!validateEmail(emailInput)) return;
    console.log("Sending...");
    emailjs
      .send("service_6yordkl", "template_mfb893u", {
        email: emailInput,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("contact-form").reset();
          label.innerHTML = "Gracias pronto recibirás tu autoclase!";
        },
        function (error) {
          label.innerHTML = "Ocurrió un error, por favor intenta de nuevo";
          console.log("FAILED...", error);
        }
      );
  });

// Modal Free class

function showModalFreeClass() {
  const modalFreeClass = document.getElementById("modal-free-class");
  modalFreeClass.classList.toggle("hidden");
  sessionStorage.setItem("viewPop", true);
}

if(!sessionStorage.getItem("viewPop")) {
  setTimeout(() => {
    showModalFreeClass();
  }, 3000);
}

const modalFreeClass = document.getElementById("modal-free-class");
const closeButtonFreeClass = document.getElementById("close-button-free-class");

closeButtonFreeClass.addEventListener("click", () => {
  modalFreeClass.classList.toggle("hidden");
});
*/