const sendMailPeru = () => {
  const form = document.getElementById("form-peru");
  const name = document.getElementById("name-peru");
  const lastName = document.getElementById("lastname-peru");
  const email = document.getElementById("email-peru");
  const phone = document.getElementById("phone-peru");
  const label = document.getElementById("label-peru");

  console.log(form)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs
      .send("service_6yordkl", "template_xwtoz5c", {
        name: name.value,
        last_name: lastName.value,
        email: email.value,
        phone: phone.value,
        register: "Lima",
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

export default sendMailPeru;
