var stripe = Stripe(
  "pk_test_51NReEuIGlS0wzkKXiCcVibiPlHNO9UI1vfWD4ZMwGibWCjgpJrgVHBIPpNybbznORJRqbN1bOuffMtYjKBofEQyc00CNFnCbkp"
);

document.getElementById("checkout").addEventListener("click", (e) => {
  stripe.redirectToCheckout({
    lineItems: [
      {
        price: "price_1NUqJIIGlS0wzkKXE194Qc2c",
        quantity: 1,
      }
    ],
    mode: "payment",
    successUrl: "http://localhost:5173/success.html",
    cancelUrl: "http://localhost:5173/presencial.html",
  }).then(function (result) {
    if (result.ok) {
      console.log("ok");
    } else {
      console.log("error");
    }
  });
});
