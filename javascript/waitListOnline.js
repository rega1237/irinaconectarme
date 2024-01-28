const sendMailOnline = () => {
  const form = document.getElementById("form-online");
  const name = document.getElementById("name-online");
  const lastName = document.getElementById("lastname-online");
  const email = document.getElementById("email-online");
  const phone = document.getElementById("phone-online");
  const label = document.getElementById("label-online");

  console.log(form)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs
      .send("service_6yordkl", "template_xwtoz5c", {
        name: name.value,
        last_name: lastName.value,
        email: email.value,
        phone: phone.value,
        register: "Online",
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

export default sendMailOnline;