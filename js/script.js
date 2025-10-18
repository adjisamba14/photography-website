
// Minimal interactivity for prototype
document.addEventListener("DOMContentLoaded", () => {
  const cartCountEl = document.querySelector("#cart-count");
  let count = 0;
  document.querySelectorAll("[data-add-to-cart]").forEach(btn => {
    btn.addEventListener("click", () => {
      count += 1;
      if (cartCountEl) cartCountEl.textContent = String(count);
      alert("Added to cart (prototype only).");
    });
  });
});
