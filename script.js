const cartCount = document.getElementById("cartCount");
const cartButton = document.getElementById("cartButton");
const addToCartButtons = document.querySelectorAll(".inline-cart");
const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");
const newsletterForm = document.getElementById("newsletterForm");
const faqItems = document.querySelectorAll(".faq-item");

let cartTotal = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartTotal += 1;
    cartCount.textContent = String(cartTotal);

    const productName = button.dataset.product || "item";
    cartButton.textContent = `Cart ${cartTotal}`;

    const cartBadge = document.createElement("span");
    cartBadge.textContent = " Added";
    cartButton.appendChild(cartBadge);

    window.setTimeout(() => {
      cartButton.textContent = "Cart ";
      cartButton.appendChild(cartCount);
    }, 700);

    console.log(`${productName} added to cart`);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const selectedFilter = button.dataset.filter;

    productCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = selectedFilter === "all" || category === selectedFilter;
      card.hidden = !shouldShow;
    });
  });
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailField = newsletterForm.querySelector('input[name="email"]');
  const submittedValue = emailField.value.trim();

  if (!submittedValue) {
    return;
  }

  window.alert(`Thanks for subcribing, ${submittedValue}!`);
  newsletterForm.reset();
});

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const wasActive = item.classList.contains("active");

    faqItems.forEach((entry) => entry.classList.remove("active"));

    if (!wasActive) {
      item.classList.add("active");
    }
  });
});
