const sendMailMiami = () => {
  const form = document.getElementById("form-miami");
  const name = document.getElementById("name-miami");
  const lastName = document.getElementById("lastname-miami");
  const email = document.getElementById("email-miami");
  const phone = document.getElementById("phone-miami");
  const label = document.getElementById("label-miami");

  console.log(form)

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs
      .send("service_6yordkl", "template_xwtoz5c", {
        name: name.value,
        last_name: lastName.value,
        email: email.value,
        phone: phone.value,
        register: "Miami",
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

export default sendMailMiami;