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
const articleModalOverlay = document.getElementById("articleModalOverlay");
const articleModalClose = document.getElementById("articleModalClose");
const articleEyebrow = document.getElementById("articleEyebrow");
const articleTitle = document.getElementById("articleTitle");
const articleContent = document.getElementById("articleContent");
const journalCards = document.querySelectorAll(".journal-card-clickable");

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

const articleData = {
  "shelf-layering": {
    eyebrow: "Guide · 4 min read",
    title: "How to layer a shelf without making it feel crowded",
    content: [
      { type: "intro", text: "A well-styled shelf can anchor an entire room. The difference between crowded and considered usually comes down to three things: anchor objects, a texture rule, and knowing where to leave space empty." },
      { type: "heading", text: "Start with three anchor objects" },
      { type: "paragraph", text: "Choose three objects that vary in height — one tall, one medium, one low. A narrow-neck vase, a stack of books laid flat, and a small ceramic dish work well together. Place the tallest anchor slightly off-center rather than at the edge or exact middle." },
      { type: "heading", text: "The one-texture rule" },
      { type: "paragraph", text: "Pick one dominant texture and let everything else be smooth or neutral. Mixing too many rough or patterned surfaces is what makes shelves feel visually noisy. A slight tonal range adds depth without competing textures." },
      { type: "heading", text: "Where negative space helps the most" },
      { type: "paragraph", text: "Leave at least a third of your shelf visually open. Empty space is not wasted — it is what lets each object breathe and be noticed. Vary where the empty space falls across levels to create a diagonal rhythm that feels balanced without being symmetrical." },
      { type: "heading", text: "Quick adjustments that make a big difference" },
      { type: "list", items: [
        "Lay books flat and use them as a riser for a smaller object on top.",
        "Add one organic element — a small plant or dried stem — to soften the arrangement.",
        "Step back and squint. If one area pulls your eye too strongly, remove or swap one object.",
        "Stagger objects front to back slightly rather than lining them up in a straight row."
      ]},
    ]
  },
  "candle-care": {
    eyebrow: "Care · 6 min read",
    title: "Candle care basics for a cleaner, slower burn",
    content: [
      { type: "intro", text: "A good candle can last twice as long with a few simple habits. Most common problems — tunneling, black soot, weak scent — come down to the same handful of mistakes." },
      { type: "heading", text: "The first burn is the most important one" },
      { type: "paragraph", text: "Wax has memory. The first time you light a candle, let it burn until the entire top layer melts edge to edge — usually two to four hours. If you blow it out too early, every subsequent burn will follow that same shallow path, wasting a significant portion of the candle." },
      { type: "heading", text: "Trim the wick before every burn" },
      { type: "paragraph", text: "Trim the wick to about a quarter inch before lighting. A wick that is too long produces a larger flame that burns hotter than intended, consumes wax too quickly, and creates black soot on the glass. Small scissors or nail clippers work fine." },
      { type: "heading", text: "One common mistake people make" },
      { type: "paragraph", text: "Blowing out a candle instead of snuffing it. Blowing forces the wick off-center and sends a plume of smoke into the room. Use a candle snuffer or dip the wick into the melted wax pool, then straighten it back up." },
      { type: "heading", text: "Storage tips" },
      { type: "list", items: [
        "Keep candles away from direct sunlight and heat sources.",
        "Store unused candles with their lids on to preserve the scent.",
        "Burn on a stable, heat-resistant surface away from drafts.",
        "Never burn when less than half an inch of wax remains in the vessel."
      ]},
    ]
  },
  "studio-visit": {
    eyebrow: "Story · 3 min read",
    title: "Inside our latest studio visit with a ceramicist in Maine",
    content: [
      { type: "intro", text: "Every season we visit a small number of the makers we work with to see how pieces are made and choose what comes next. This spring we spent a morning at a ceramics studio on the coast of Maine." },
      { type: "heading", text: "The studio" },
      { type: "paragraph", text: "The studio sits in a converted barn about a mile from the water. Shelves of drying pieces line one wall, bags of raw clay are stacked near the door, and the wheels are positioned to catch the north-facing light. The ceramicist has been working in this space for eleven years, making everything by hand on the wheel." },
      { type: "heading", text: "Glaze tests" },
      { type: "paragraph", text: "One wall is dedicated entirely to glaze test tiles — hundreds of small fired squares in every tone imaginable. The dune glaze on our stoneware breakfast set came from a test series that started with a warm grey and shifted over about forty iterations. Each piece has slight variation, which is part of what makes every set feel unique." },
      { type: "heading", text: "What we chose this season" },
      { type: "list", items: [
        "A new run of the stoneware breakfast set in the dune glaze, with slightly deeper bowls.",
        "A small batch of bud vases in a new iron-oxide glaze that fires to a warm dark brown.",
        "A set of four low dishes that work as both prep bowls and table serving pieces."
      ]},
      { type: "paragraph", text: "We left with a car full of carefully wrapped pieces and a better understanding of why handmade ceramics age so well. The more you use them, the more they feel like yours." },
    ]
  }
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
    openCollectionModal(card.dataset.collection);
  });
});

modalClose.addEventListener("click", closeCollectionModal);
modalOverlay.addEventListener("click", function (event) {
  if (event.target === modalOverlay) closeCollectionModal();
});

function buildArticleHTML(blocks) {
  var html = "";
  blocks.forEach(function (block) {
    if (block.type === "intro") {
      html += '<p class="article-intro">' + block.text + '</p>';
    } else if (block.type === "heading") {
      html += '<h3>' + block.text + '</h3>';
    } else if (block.type === "paragraph") {
      html += '<p>' + block.text + '</p>';
    } else if (block.type === "list") {
      html += '<ul>';
      block.items.forEach(function (item) { html += '<li>' + item + '</li>'; });
      html += '</ul>';
    }
  });
  return html;
}

function openArticleModal(key) {
  var data = articleData[key];
  if (!data) return;
  articleEyebrow.textContent = data.eyebrow;
  articleTitle.textContent = data.title;
  articleContent.innerHTML = buildArticleHTML(data.content);
  articleModalOverlay.setAttribute("aria-hidden", "false");
  articleModalOverlay.classList.add("is-open");
  document.body.classList.add("modal-open");
  var body = document.querySelector(".article-modal-body");
  if (body) body.scrollTop = 0;
}

function closeArticleModal() {
  articleModalOverlay.setAttribute("aria-hidden", "true");
  articleModalOverlay.classList.remove("is-open");
  document.body.classList.remove("modal-open");
}

journalCards.forEach(function (card) {
  card.addEventListener("click", function () {
    openArticleModal(card.dataset.article);
  });
});

articleModalClose.addEventListener("click", closeArticleModal);
articleModalOverlay.addEventListener("click", function (event) {
  if (event.target === articleModalOverlay) closeArticleModal();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (articleModalOverlay.classList.contains("is-open")) {
      closeArticleModal();
    } else if (modalOverlay.classList.contains("is-open")) {
      closeCollectionModal();
    }
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