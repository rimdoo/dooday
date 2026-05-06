const paymentDialog = document.querySelector(".payment-dialog");
const openPaymentButtons = document.querySelectorAll("[data-open-payment]");
const confirmDownload = document.querySelector(".confirm-download");
const closePaymentButtons = paymentDialog.querySelectorAll("[value='cancel']");

function openPaymentDialog() {
  if (typeof paymentDialog.showModal === "function") {
    paymentDialog.showModal();
    return;
  }

  document.body.classList.add("payment-fallback-open");
  paymentDialog.classList.add("is-fallback-open");
  paymentDialog.setAttribute("open", "");
}

function closePaymentDialog() {
  document.body.classList.remove("payment-fallback-open");
  paymentDialog.classList.remove("is-fallback-open");

  if (typeof paymentDialog.close === "function" && paymentDialog.open) {
    paymentDialog.close("cancel");
    return;
  }

  paymentDialog.removeAttribute("open");
}

openPaymentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openPaymentDialog();
  });
});

closePaymentButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    closePaymentDialog();
  });
});

confirmDownload.addEventListener("click", () => {
  document.body.classList.remove("payment-fallback-open");
  paymentDialog.classList.remove("is-fallback-open");

  if (typeof paymentDialog.close === "function" && paymentDialog.open) {
    paymentDialog.close("download");
  }
});
