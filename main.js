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
