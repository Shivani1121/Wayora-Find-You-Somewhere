
"use strict";

/* ==========================================
   WAYORA — DESTINATIONS & IMAGE FALLBACKS
========================================== */

const imageUrl = (photoId, width = 900) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;

const destinations = [
  {
    city: "Edinburgh",
    country: "Scotland",
    region: "Europe",
    vibe: "Cobblestone streets, cosy cafés and storybook mornings.",
    tag: "Main character energy",
    emoji: "🏰",
    category: ["city", "culture", "romantic"],
    image: imageUrl("photo-1506377585622-bedcbb027afc")
  },
  {
    city: "Swiss Alps",
    country: "Switzerland",
    region: "Europe",
    vibe: "Mountain air, alpine lakes and quiet little villages.",
    tag: "Nature escape",
    emoji: "🏔️",
    category: ["nature", "romantic"],
    image: imageUrl("photo-1464822759023-fed622ff2c3b")
  },
  {
    city: "Amalfi Coast",
    country: "Italy",
    region: "Europe",
    vibe: "Colourful seaside towns and long lunches in the sun.",
    tag: "Coastal dreaming",
    emoji: "🍋",
    category: ["beach", "romantic", "culture"],
    image: imageUrl("photo-1516483638261-f4dbaf036963")
  },
  {
    city: "Bali",
    country: "Indonesia",
    region: "Asia",
    vibe: "Tropical greenery, beach sunsets and slow mornings.",
    tag: "Island state of mind",
    emoji: "🌴",
    category: ["beach", "nature"],
    image: imageUrl("photo-1537996194471-e657df975ab4")
  },
  {
    city: "Tokyo",
    country: "Japan",
    region: "Asia",
    vibe: "Neon nights, little cafés and endless things to discover.",
    tag: "City energy",
    emoji: "🌃",
    category: ["city", "culture"],
    image: imageUrl("photo-1540959733332-eab4deabeeaf")
  },
  {
    city: "Kyoto",
    country: "Japan",
    region: "Asia",
    vibe: "Quiet temples, beautiful gardens and timeless streets.",
    tag: "Slow wandering",
    emoji: "🏯",
    category: ["culture", "nature", "romantic"],
    image: imageUrl("photo-1493976040374-85c8e12f0c0e")
  },
  {
    city: "Santorini",
    country: "Greece",
    region: "Europe",
    vibe: "Whitewashed houses, blue seas and golden-hour views.",
    tag: "Golden hour",
    emoji: "🌊",
    category: ["beach", "romantic"],
    image: imageUrl("photo-1533105079780-92b9be482077")
  },
  {
    city: "Paris",
    country: "France",
    region: "Europe",
    vibe: "Bookshops, art, pastries and romantic little walks.",
    tag: "A little romance",
    emoji: "🥐",
    category: ["city", "culture", "romantic"],
    image: imageUrl("photo-1499856871958-5b9627545d1a")
  },
  {
    city: "Maldives",
    country: "Maldives",
    region: "Asia",
    vibe: "Turquoise water, island stays and barefoot luxury.",
    tag: "Ocean therapy",
    emoji: "🐚",
    category: ["beach", "romantic"],
    image: imageUrl("photo-1510414842594-a61c69b5ae57")
  },
  {
    city: "Sydney",
    country: "Australia",
    region: "Oceania",
    vibe: "Harbour views, coastal walks and sunny afternoons.",
    tag: "Sunshine days",
    emoji: "☀️",
    category: ["beach", "city", "nature"],
    image: imageUrl("photo-1506973035872-a4ec16b8e8d9")
  },
  {
    city: "Cape Town",
    country: "South Africa",
    region: "Africa",
    vibe: "Dramatic mountains, beaches and colourful neighbourhoods.",
    tag: "Wild beauty",
    emoji: "🌍",
    category: ["nature", "beach", "city"],
    image: imageUrl("photo-1580060839134-75a5edca2e99")
  },
  {
    city: "New York City",
    country: "USA",
    region: "North America",
    vibe: "Big-city dreams, late-night food and iconic skylines.",
    tag: "City that never sleeps",
    emoji: "🌆",
    category: ["city", "culture"],
    image: imageUrl("photo-1519501025264-65ba15a82390")
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    region: "South America",
    vibe: "Beach days, mountain backdrops and lively streets.",
    tag: "Colourful living",
    emoji: "🌺",
    category: ["beach", "nature", "city"],
    image: imageUrl("photo-1483729558449-99ef09a8c325")
  },
  {
    city: "Jaipur",
    country: "India",
    region: "India",
    vibe: "Pink palaces, colourful bazaars and royal architecture.",
    tag: "Royal routes",
    emoji: "🕌",
    category: ["culture", "city"],
    image: imageUrl("photo-1599661046827-dacff0c0f09a")
  },
  {
    city: "Goa",
    country: "India",
    region: "India",
    vibe: "Beach shacks, coastal roads and easygoing evenings.",
    tag: "Beach, please",
    emoji: "🏖️",
    category: ["beach", "nature"],
    image: imageUrl("photo-1512343879784-a960bf40e7f2")
  },
  {
    city: "Manali",
    country: "India",
    region: "India",
    vibe: "Pine forests, mountain roads and cosy winter stays.",
    tag: "Mountain mood",
    emoji: "🌲",
    category: ["nature"],
    image: imageUrl("photo-1501785888041-af3ef285b470")
  },
  {
    city: "Singapore",
    country: "Singapore",
    region: "Asia",
    vibe: "Futuristic gardens, food markets and sparkling skylines.",
    tag: "Future feels",
    emoji: "🌆",
    category: ["city", "culture"],
    image: imageUrl("photo-1525625293386-3f8f99389edd")
  },
  {
    city: "Bangkok",
    country: "Thailand",
    region: "Asia",
    vibe: "Street food, bustling markets and golden temples.",
    tag: "Taste the world",
    emoji: "🍜",
    category: ["city", "culture"],
    image: imageUrl("photo-1508009603885-50cf7c579365")
  },
  {
    city: "Istanbul",
    country: "Turkey",
    region: "Europe",
    vibe: "Historic streets, waterfront views and wonderful food.",
    tag: "East meets west",
    emoji: "🕌",
    category: ["culture", "city", "romantic"],
    image: imageUrl("photo-1524231757912-21f4fe3a7200")
  },
  {
    city: "Dubai",
    country: "UAE",
    region: "Asia",
    vibe: "Desert sunsets, modern architecture and luxury stays.",
    tag: "Desert dreams",
    emoji: "🌇",
    category: ["city", "culture"],
    image: imageUrl("photo-1512453979798-5ea266f8880c")
  },
  {
    city: "Barcelona",
    country: "Spain",
    region: "Europe",
    vibe: "Art-filled streets, seaside afternoons and tapas.",
    tag: "Art & sunshine",
    emoji: "🎨",
    category: ["city", "beach", "culture"],
    image: imageUrl("photo-1583422409516-2895a77efded")
  },
  {
    city: "Reykjavik",
    country: "Iceland",
    region: "Europe",
    vibe: "Wild landscapes, hot springs and northern skies.",
    tag: "Otherworldly",
    emoji: "🌌",
    category: ["nature"],
    image: imageUrl("photo-1476610182048-b716b8518aae")
  },
  {
    city: "Marrakech",
    country: "Morocco",
    region: "Africa",
    vibe: "Hidden courtyards, colourful souks and warm evenings.",
    tag: "A different world",
    emoji: "🧿",
    category: ["culture", "city"],
    image: imageUrl("photo-1539020140153-e479b8c22e70")
  },
  {
    city: "Queenstown",
    country: "New Zealand",
    region: "Oceania",
    vibe: "Lake views, mountain adventures and fresh air.",
    tag: "Adventure calling",
    emoji: "⛰️",
    category: ["nature"],
    image: imageUrl("photo-1507699622108-4be3abd695ad")
  },
  {
    city: "Cusco",
    country: "Peru",
    region: "South America",
    vibe: "Ancient history, mountain scenery and colourful markets.",
    tag: "History awaits",
    emoji: "🏔️",
    category: ["culture", "nature"],
    image: imageUrl("photo-1526392060635-9d6019884377")
  },
  {
    city: "Cairo",
    country: "Egypt",
    region: "Africa",
    vibe: "Ancient wonders, desert horizons and rich history.",
    tag: "Time travel",
    emoji: "🏜️",
    category: ["culture", "city"],
    image: imageUrl("photo-1503177119275-0aa32b3a9368")
  },
  {
    city: "Seoul",
    country: "South Korea",
    region: "Asia",
    vibe: "Design cafés, night markets and old-meets-new streets.",
    tag: "Modern magic",
    emoji: "🌃",
    category: ["city", "culture"],
    image: imageUrl("photo-1517154421773-0529f29ea451")
  },
  {
    city: "Lisbon",
    country: "Portugal",
    region: "Europe",
    vibe: "Pastel buildings, tram rides and sunset viewpoints.",
    tag: "Soft life",
    emoji: "🚋",
    category: ["city", "culture", "romantic"],
    image: imageUrl("photo-1555881400-74d7acaacd8b")
  },
  {
    city: "Vancouver",
    country: "Canada",
    region: "North America",
    vibe: "Ocean air, green parks and mountain views.",
    tag: "City meets nature",
    emoji: "🌿",
    category: ["nature", "city"],
    image: imageUrl("photo-1519832979-6fa011b87667")
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    region: "Asia",
    vibe: "Skyline views, food streets and lush city parks.",
    tag: "Urban escape",
    emoji: "🌇",
    category: ["city", "culture"],
    image: imageUrl("photo-1596422846543-75c6fc197f07")
  }
];

/* ==========================================
   IMAGE RETRY SYSTEM
   If a photo fails, try other online photos.
   If all attempts fail, show a visual fallback.
========================================== */

const backupImages = [
  imageUrl("photo-1470770841072-f978cf4d019e", 900),
  imageUrl("photo-1464822759023-fed622ff2c3b", 900),
  imageUrl("photo-1501785888041-af3ef285b470", 900)
];

function handleImageError(img) {
  const attempt = Number(img.dataset.fallbackAttempt || "0");

  if (attempt < backupImages.length) {
    img.dataset.fallbackAttempt = String(attempt + 1);
    img.src = backupImages[attempt];
    return;
  }

  img.onerror = null;
  img.style.display = "none";

  const parent = img.parentElement;
  if (parent) {
    parent.classList.add("image-failed");
  }

  const fallback = img.nextElementSibling;

  if (fallback && fallback.classList.contains("card-image-fallback")) {
    fallback.hidden = false;
  }
}

/* ==========================================
   ELEMENTS
========================================== */

const grid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("destinationSearch");
const filterRow = document.getElementById("filterRow");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const showMoreBtn = document.getElementById("showMoreBtn");
const tripDestination = document.getElementById("tripDestination");
const tripResult = document.getElementById("tripResult");

let activeFilter = "all";
let visibleCount = 12;

const favorites = new Set();

/* ==========================================
   DESTINATION SEARCH AND FILTERS
========================================== */

function filteredDestinations() {
  const term = searchInput.value.trim().toLowerCase();

  return destinations.filter(place => {
    const searchable = [
      place.city,
      place.country,
      place.region,
      place.vibe,
      place.tag,
      ...place.category
    ].join(" ").toLowerCase();

    const matchesSearch = !term || searchable.includes(term);
    const matchesFilter =
      activeFilter === "all" || place.category.includes(activeFilter);

    return matchesSearch && matchesFilter;
  });
}

function cardTemplate(place) {
  const isFavorite = favorites.has(place.city);

  return `
    <article class="destination-card">
      <div class="card-image-wrap">
        <img
          class="card-image"
          src="${place.image}"
          alt="${place.city}, ${place.country}"
          loading="lazy"
          onerror="handleImageError(this)"
        >

        <div class="card-image-fallback" hidden>
          ${place.emoji}
        </div>

        <span class="card-tag">${place.tag}</span>

        <button
          class="favorite-btn ${isFavorite ? "is-favorite" : ""}"
          type="button"
          aria-label="${isFavorite ? "Remove" : "Add"} ${place.city} ${isFavorite ? "from" : "to"} favourites"
          aria-pressed="${isFavorite}"
          data-favorite="${place.city}"
        >${isFavorite ? "♥" : "♡"}</button>
      </div>

      <div class="card-body">
        <span class="card-country">${place.country}</span>
        <h3>${place.city}</h3>
        <p>${place.vibe}</p>

        <div class="card-bottom">
          <span>${place.region}</span>
          <button
            class="plan-link"
            type="button"
            data-plan="${place.city}"
          >Plan a trip ↗</button>
        </div>
      </div>
    </article>
  `;
}

function renderDestinations() {
  const matches = filteredDestinations();
  const shown = matches.slice(0, visibleCount);

  grid.innerHTML = shown.map(cardTemplate).join("");

  resultCount.textContent =
    `${matches.length} ${matches.length === 1 ? "destination" : "destinations"} to daydream about`;

  emptyState.hidden = matches.length !== 0;
  showMoreBtn.hidden = matches.length <= visibleCount;

  if (matches.length === 0) {
    emptyState.hidden = false;
  }
}

function fillTripOptions() {
  const sorted = [...destinations].sort((a, b) =>
    a.city.localeCompare(b.city)
  );

  tripDestination.innerHTML =
    '<option value="">Choose a destination</option>' +
    sorted.map(place =>
      `<option value="${place.city}">${place.city} — ${place.country}</option>`
    ).join("");
}

filterRow.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;

  filterRow.querySelectorAll(".filter-chip").forEach(chip => {
    chip.classList.toggle("active", chip === button);
  });

  visibleCount = 12;
  renderDestinations();
});

searchInput.addEventListener("input", () => {
  visibleCount = 12;
  renderDestinations();
});

showMoreBtn.addEventListener("click", () => {
  visibleCount += 12;
  renderDestinations();
});

grid.addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-favorite]");

  if (favoriteButton) {
    const city = favoriteButton.dataset.favorite;

    if (favorites.has(city)) {
      favorites.delete(city);
    } else {
      favorites.add(city);
    }

    renderDestinations();
    return;
  }

  const planButton = event.target.closest("[data-plan]");

  if (planButton) {
    tripDestination.value = planButton.dataset.plan;

    document.getElementById("planner").scrollIntoView({
      behavior: "smooth"
    });

    tripDestination.focus({ preventScroll: true });
  }
});

/* ==========================================
   TRIP PLANNER
   Approximate costs, not live prices.
========================================== */

const destinationCosts = {
  "Edinburgh": { region: "Europe", daily: 11000, flight: 65000 },
  "Swiss Alps": { region: "Europe", daily: 15000, flight: 65000 },
  "Amalfi Coast": { region: "Europe", daily: 14000, flight: 65000 },
  "Bali": { region: "Asia", daily: 5000, flight: 22000 },
  "Tokyo": { region: "Asia", daily: 9000, flight: 35000 },
  "Kyoto": { region: "Asia", daily: 8500, flight: 35000 },
  "Santorini": { region: "Europe", daily: 13000, flight: 65000 },
  "Paris": { region: "Europe", daily: 13000, flight: 65000 },
  "Maldives": { region: "Asia", daily: 12000, flight: 20000 },
  "Sydney": { region: "Oceania", daily: 14000, flight: 55000 },
  "Cape Town": { region: "Africa", daily: 8000, flight: 45000 },
  "New York City": { region: "North America", daily: 16000, flight: 75000 },
  "Rio de Janeiro": { region: "South America", daily: 8000, flight: 80000 },
  "Jaipur": { region: "India", daily: 3000, flight: 5000 },
  "Goa": { region: "India", daily: 3500, flight: 5000 },
  "Manali": { region: "India", daily: 3000, flight: 7000 },
  "Singapore": { region: "Asia", daily: 9000, flight: 18000 },
  "Bangkok": { region: "Asia", daily: 5000, flight: 18000 },
  "Istanbul": { region: "Europe", daily: 7000, flight: 35000 },
  "Dubai": { region: "Asia", daily: 10000, flight: 18000 },
  "Barcelona": { region: "Europe", daily: 11000, flight: 65000 },
  "Reykjavik": { region: "Europe", daily: 16000, flight: 75000 },
  "Marrakech": { region: "Africa", daily: 6000, flight: 50000 },
  "Queenstown": { region: "Oceania", daily: 13000, flight: 60000 },
  "Cusco": { region: "South America", daily: 5000, flight: 80000 },
  "Cairo": { region: "Africa", daily: 5000, flight: 30000 },
  "Seoul": { region: "Asia", daily: 8000, flight: 30000 },
  "Lisbon": { region: "Europe", daily: 9000, flight: 60000 },
  "Vancouver": { region: "North America", daily: 13000, flight: 70000 },
  "Kuala Lumpur": { region: "Asia", daily: 5000, flight: 15000 }
};

function formatRupees(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

function getRouteSuggestion(region) {
  const routes = {
    India: "Compare train and flight options to the destination, then use local cabs or public transport.",
    Asia: "Compare direct flights into the destination's main airport. Metro and local rail may help with city travel.",
    Europe: "Compare flights into a nearby international airport. Trains can be useful for travel between European cities.",
    Africa: "Compare international flights and airport transfers before booking any local excursions.",
    Oceania: "Compare long-haul flights and check whether local buses, trains or a rental car best suit your plans.",
    "North America": "Compare flights to the nearest major airport, then check local transit or airport transfers.",
    "South America": "Compare international connections and confirm local transport options before finalising your route."
  };

  return routes[region] ||
    "Compare flights, local transport and airport transfers before booking.";
}

document.getElementById("plannerForm").addEventListener("submit", event => {
  event.preventDefault();

  const city = tripDestination.value;
  const days = Number(document.getElementById("tripDays").value);
  const people = Number(document.getElementById("tripPeople").value);
  const style = document.getElementById("tripStyle").value;

  const destination = destinations.find(place => place.city === city);

  if (!destination) {
    tripResult.hidden = false;
    tripResult.innerHTML = "<p>Please choose a destination first.</p>";
    return;
  }

  const costs = destinationCosts[city] || {
    region: destination.region,
    daily: 7000,
    flight: 25000
  };

  const styleMultiplier = {
    budget: 0.7,
    comfort: 1,
    luxury: 1.8
  }[style] || 1;

  const dailyPerPerson = costs.daily * styleMultiplier;

  // Estimate lodging, meals, local transport and activities.
  const stayAndActivities = dailyPerPerson * days * people;

  // A rough return-flight estimate for each traveller.
  const flights = costs.flight * people;

  // Small buffer for unexpected expenses.
  const buffer = (stayAndActivities + flights) * 0.12;

  const total = Math.round(stayAndActivities + flights + buffer);
  const perPerson = Math.round(total / people);

  const styleNames = {
    budget: "Budget-friendly",
    comfort: "Comfort and adventure",
    luxury: "Treat-yourself"
  };

  tripResult.hidden = false;
  tripResult.innerHTML = `
    <span class="eyebrow">YOUR LITTLE TRIP OUTLINE</span>
    <h3>${destination.city} is calling ✳</h3>
    <p>${days} days · ${people} ${people === 1 ? "traveller" : "travellers"} · ${styleNames[style]}</p>

    <span class="estimate-price">${formatRupees(total)}</span>
    <p>Estimated total for your group</p>

    <ul>
      <li>Accommodation, meals and activities: ${formatRupees(Math.round(stayAndActivities))}</li>
      <li>Estimated return flights: ${formatRupees(Math.round(flights))}</li>
      <li>Extra expense buffer: ${formatRupees(Math.round(buffer))}</li>
      <li>Approximate cost per person: ${formatRupees(perPerson)}</li>
    </ul>

    <p class="route-note"><strong>Your route starting point:</strong><br>${getRouteSuggestion(destination.region)}</p>

    <p class="result-disclaimer">Planning estimate only. Actual costs depend on your departure city, travel dates, exchange rates, availability and bookings. Flight estimates may differ substantially from live fares.</p>
  `;

  tripResult.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});

/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

/* ==========================================
   LOGIN DEMO
========================================== */

const loginModal = document.getElementById("loginModal");
const loginOpen = document.getElementById("loginOpen");
const loginClose = document.getElementById("loginClose");
const loginBackdrop = document.getElementById("loginBackdrop");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

function openLogin() {
  loginModal.hidden = false;
  document.body.classList.add("modal-open");
  loginMessage.textContent = "";

  setTimeout(() => {
    document.getElementById("loginEmail").focus();
  }, 50);
}

function closeLogin() {
  loginModal.hidden = true;
  document.body.classList.remove("modal-open");
  loginOpen.focus();
}

loginOpen.addEventListener("click", openLogin);
loginClose.addEventListener("click", closeLogin);
loginBackdrop.addEventListener("click", closeLogin);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !loginModal.hidden) {
    closeLogin();
  }
});

loginForm.addEventListener("submit", event => {
  event.preventDefault();

  loginMessage.textContent =
    "This is a demo login. Connect a secure authentication service to enable real accounts.";
});

/* ==========================================
   TOAST MESSAGE
========================================== */

let toastTimer;

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* ==========================================
   FOOTER YEAR & INITIALISATION
========================================== */

document.getElementById("copyrightYear").textContent =
  new Date().getFullYear();

fillTripOptions();
renderDestinations();
