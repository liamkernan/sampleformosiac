const cartCount = document.getElementById("cartCount");
const cartButton = document.getElementById("cartButton");
const addToCartButtons = document.querySelectorAll(".inline-cart");
const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");
const newsletterForm = document.getElementById("newsletterForm");
const faqItems = document.querySelectorAll(".faq-item");
const collectionCards = document.querySelectorAll(".collection-card-clickable");
const modalOverlay = document.getElementById("collectionModalOverlay");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalItems = document.getElementById("modalItems");
const modalReviewList = document.getElementById("modalReviewList");
const modalAddToCart = document.getElementById("modalAddToCart");

const collectionData = {
  kitchen: {
    eyebrow: "Browse by room",
    title: "Kitchen Collection",
    description: "Warm ceramics, linen towels, and pantry storage crafted by independent makers. Each piece is designed for everyday use and built to last.",
    imageClass: "kitchen",
    items: [
      { name: "Stoneware Breakfast Set", price: "$48", desc: "Matte ceramic bowls and mugs in a soft dune glaze." },
      { name: "Oak Serving Board", price: "$36", desc: "Solid hardwood board with a leather hanging loop." },
      { name: "Linen Towel Pair", price: "$22", desc: "Stonewashed linen in natural and oat, sold as a set." },
      { name: "Pantry Canister Set", price: "$54", desc: "Three stackable ceramic canisters with cork lids." },
    ],
    reviews: [
      { quote: "The breakfast set transformed our morning routine. Beautiful and practical.", author: "Cleo R., Portland" },
      { quote: "Fast delivery and the ceramics feel so much more expensive than the price.", author: "Miles T., Denver" },
      { quote: "Gifted the serving board and it was a huge hit. Will order again.", author: "Priya S., Austin" },
    ],
    cartProduct: "Kitchen Collection Bundle",
  },
  living: {
    eyebrow: "Browse by room",
    title: "Living Room Collection",
    description: "Textural throws, candle holders, and lounge accents that bring warmth and calm to any living space.",
    imageClass: "living",
    items: [
      { name: "Woven Throw Blanket", price: "$68", desc: "Chunky-knit cotton throw in warm oat and sage tones." },
      { name: "Cloud Glass Candle", price: "$24", desc: "Mineral wax candle with cedar, iris, and a touch of smoke." },
      { name: "Sandstone Vase", price: "$42", desc: "Hand-finished vessel with a chalky texture and narrow neck." },
      { name: "Catchall Dish", price: "$18", desc: "Speckled ceramic dish for keys, rings, and small objects." },
    ],
    reviews: [
      { quote: "The throw blanket is incredibly soft. It's become a permanent fixture on our sofa.", author: "Ariana L., Boston" },
      { quote: "The candle scent is subtle and perfect. Burns evenly and lasts a long time.", author: "Nina P., Seattle" },
      { quote: "Ordered the vase and catchall dish together — they look great as a pair.", author: "James K., Chicago" },
    ],
    cartProduct: "Living Room Collection Bundle",
  },
  workspace: {
    eyebrow: "Browse by room",
    title: "Workspace Collection",
    description: "Desk trays, paper goods, and simple lighting to keep your workspace calm, organized, and inspiring.",
    imageClass: "workspace",
    items: [
      { name: "Canvas Desk Tray", price: "$28", desc: "Soft-sided tray for cords, notes, and other desk clutter." },
      { name: "Brass Clip Set", price: "$14", desc: "Six solid brass binder clips in two sizes." },
      { name: "Linen Notebook", price: "$19", desc: "A5 notebook with a linen cover and dot-grid pages." },
      { name: "Ceramic Pen Cup", price: "$26", desc: "Wheel-thrown cup in a matte charcoal glaze." },
    ],
    reviews: [
      { quote: "The desk tray finally gave my workspace the structure it needed. Love the material.", author: "Tom W., New York" },
      { quote: "The notebook feels premium and the linen cover gets better with use.", author: "Sara M., San Francisco" },
      { quote: "Ordered the full set as a gift and it was beautifully packaged. Very impressed.", author: "Lena B., Minneapolis" },
    ],
    cartProduct: "Workspace Collection Bundle",
  },
};

let cartTotal = 0;

function openCollectionModal(collectionKey) {
  const data = collectionData[collectionKey];
  if (!data) return;

  modalImage.className = "modal-image " + data.imageClass;
  modalEyebrow.textContent = data.eyebrow;
  modalTitle.textContent = data.title;
  modalDescription.textContent = data.description;

  modalItems.innerHTML = "";
  data.items.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "modal-item-card";
    card.innerHTML =
      '<div class="modal-item-info">' +
        '<strong>' + item.name + '</strong>' +
        '<p>' + item.desc + '</p>' +
      '</div>' +
      '<span class="modal-item-price">' + item.price + '</span>';
    modalItems.appendChild(card);
  });

  modalReviewList.innerHTML = "";
  data.reviews.forEach(function (review) {
    const reviewEl = document.createElement("div");
    reviewEl.className = "modal-review-item";
    reviewEl.innerHTML =
      '<p class="modal-review-quote">"' + review.quote + '"</p>' +
      '<p class="modal-review-author">' + review.author + '</p>';
    modalReviewList.appendChild(reviewEl);
  });

  modalAddToCart.dataset.product = data.cartProduct;

  modalOverlay.setAttribute("aria-hidden", "false");
  modalOverlay.classList.add("is-open");
  document.body.classList.add("modal-open");
}

function closeCollectionModal() {
  modalOverlay.setAttribute("aria-hidden", "true");
  modalOverlay.classList.remove("is-open");
  document.body.classList.remove("modal-open");
}

collectionCards.forEach(function (card) {
  card.addEventListener("click", function () {
    const key = card.dataset.collection;
    openCollectionModal(key);
  });
});

modalClose.addEventListener("click", closeCollectionModal);

modalOverlay.addEventListener("click", function (event) {
  if (event.target === modalOverlay) {
    closeCollectionModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modalOverlay.classList.contains("is-open")) {
    closeCollectionModal();
  }
});

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

modalAddToCart.addEventListener("click", function () {
  cartTotal += 1;
  cartCount.textContent = String(cartTotal);

  const productName = modalAddToCart.dataset.product || "item";
  cartButton.textContent = "Cart " + cartTotal;

  const cartBadge = document.createElement("span");
  cartBadge.textContent = " Added";
  cartButton.appendChild(cartBadge);

  window.setTimeout(function () {
    cartButton.textContent = "Cart ";
    cartButton.appendChild(cartCount);
  }, 700);

  console.log(productName + " added to cart");
  closeCollectionModal();
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