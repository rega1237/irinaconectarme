const sendMailHouston = () => {
  const form = document.getElementById("form-houston");
  const email = document.getElementById("email-houston");
  const label = document.getElementById("label-houston");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs
      .send("service_6yordkl", "template_xwtoz5c", {
        name: email.value,
        email: email.value,
        register: "Tercera Edicion Houston",
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          form.reset();
          label.innerHTML = "¡Gracias por registrarte!";
        },
        function (error) {
          label.innerHTML = "Ocurrió un error, por favor intenta de nuevo";
          console.log("FAILED...", error);
        }
      );
  });
};

export default sendMailHouston
