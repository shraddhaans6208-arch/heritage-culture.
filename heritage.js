/* ------------------------------------------------
   DATA
--------------------------------------------------*/
const HERITAGE_ITEMS = [
  {
    id: 1,
    title: "Old Town Market",
    location: "Heritage City",
    era: "17th century",
    description: "A bustling bazaar...",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=60"
  },
  {
    id: 2,
    title: "Temple of the River",
    location: "Riverside Village",
    era: "12th century",
    description: "An ancient temple...",
    image: "images.jpeg"
  },
  {
    id: 3,
    title: "Weavers' Quarter",
    location: "Old District",
    era: "19th century",
    description: "Where handlooms...",
    image: "images2.jpeg"
  },
  {
    id: 4,
    title: "Ancient Fortress Gate",
    location: "Hilltop Region",
    era: "10th century",
    description: "A stone gateway...",
    image: "images3.jpg"
  },
  {
    id: 5,
    title: "Royal Courtyard",
    location: "Central Palace Grounds",
    era: "15th century",
    description: "A cultural hub...",
    image: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1200&q=60"
  },
  {
    id: 6,
    title: "Stone Carving Village",
    location: "Eastern Highlands",
    era: "18th century",
    description: "Home to artisans...",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60"
  },
  {
    id: 7,
    title: "Heritage Bridge",
    location: "River Passage",
    era: "14th century",
    description: "A medieval bridge...",
    image: "download.jpeg"
  },
  {
    id: 8,
    title: "Cultural Dance Hall",
    location: "Festive District",
    era: "19th century",
    description: "Traditional performances...",
    image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1200&q=60"
  },
  {
    id: 9,
    title: "Historic Library",
    location: "Scholars' Lane",
    era: "16th century",
    description: "A repository of manuscripts...",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=60"
  },
  {
    id: 10,
    title: "Clay Pottery Hamlet",
    location: "Lakeside Village",
    era: "18th century",
    description: "Handcrafted pottery...",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=60"
  },
  {
    id: 11,
    title: "Heritage Clock Tower",
    location: "Town Square",
    era: "19th century",
    description: "A towering symbol...",
    image: "aman.jpg"
  },
  {
    id: 12,
    title: "Ancient Stone Pathway",
    location: "Mountain Trail",
    era: "11th century",
    description: "A timeless route...",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=60"
  }
];
/* =======================================================
   HELPERS
======================================================= */
function fadeIn() {
  const app = document.getElementById("app");
  app.style.opacity = 0;
  setTimeout(() => app.style.opacity = 1, 50);
}


/* =======================================================
   HOME
======================================================= */
function renderHome() {
  fadeIn();

  document.getElementById("app").innerHTML = `
    <section class="hero mb-4 shadow-lg">
      <h1 class="animated-title">Explore Heritage & Culture</h1>
      <p>Discover stories, places and traditions.</p>
      <a href="#/gallery" class="btn btn-primary btn-lg mt-3">View Gallery</a>
    </section>
  `;
}


/* =======================================================
   GALLERY
======================================================= */
function renderGallery() {
  fadeIn();

  const itemsHTML = HERITAGE_ITEMS.map(item => `
      <div class="col-md-4 mb-4 fade-card">
        <div class="card">
          <img src="${item.image}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="text-muted small mb-0">${item.location}</p>
          </div>
        </div>
      </div>
  `).join("");

  document.getElementById("app").innerHTML = `
    <h2 class="mb-4 text-center fw-bold">Gallery</h2>
    <div class="row">
      ${itemsHTML}
    </div>
  `;

  // animation delay for each card
  // NOTE: The original line "card.style.animation = fadeIn 0.6s ease ${(i * 0.1)}s forwards;"
  // is syntactically incorrect for setting inline styles. Assuming 'fadeIn' is a defined
  // CSS animation name in the external stylesheet, the corrected version is used below:
  document.querySelectorAll(".fade-card").forEach((card, i) => {
    card.style.animation = `fade-in-up 0.6s ease ${i * 0.1}s forwards`;
  });
}


/* =======================================================
   TIMELINE
======================================================= */
function renderTimeline() {
  fadeIn();

  // NOTE: The original timeline data contains hardcoded years (e.g., 1955, 2011) that do not
  // align with the 'era' data in HERITAGE_ITEMS (e.g., 15th century, 18th century).
  // The original timeline data structure is preserved as requested.
  const timelineData = [
    "1200 - Temple of the River recorded",
    "1650 - Old Town Market established",
    "1850 - Weavers' Quarter flourishes",
    "1853 - Ancient Fortress Gate",
    "1955 - Royal Courtyard",
    "2011 - Stone Carving Village",
    "1992 - Heritage Bridge",
    "1920 - Cultural Dance Hall",
    "2000 - Historic Library",
    "1996 - Clay Pottery Hamlet",
    "2001 - Ancient Stone Pathway",
    `${new Date().getFullYear()} - Digital preservation begins`
  ];

  const items = timelineData.map(text => {
    const parts = text.split(" - ");
    return `
      <div class="timeline-item">
        <h5>${parts[0]}</h5>
        <p>${parts[1]}</p>
      </div>
    `;
  }).join("");

  document.getElementById("app").innerHTML = `
    <h2 class="text-center mb-3 fw-bold">Timeline</h2>
    ${items}
  `;
}


/* =======================================================
   ABOUT
======================================================= */
function renderAbout() {
  fadeIn();

  document.getElementById("app").innerHTML = `
    <div class="section-box">
      <h2>About</h2>
      <p>
      Heritage & Culture Explorer is a learning project created to document and celebrate historical places, traditions, and cultural heritage.
      </p>
      <p>
      Our goal is to help people understand the value of history and preserve stories for future generations. This website is designed for educational purposes.
      </p>

      <h4 class="mt-4">Culture & Heritage of Bihar</h4>
      <p>Bihar is one of the oldest cultural regions of India...</p>

      <ul>
        <li>Nalanda University</li>
        <li>Bodh Gaya</li>
        <li>Vikramshila University</li>
        <li>Rajgir</li>
        <li>Madhubani Art</li>
      </ul>

      <h5 class="mt-3">Languages</h5>
      <ul>
        <li>Hindi</li>
        <li>Maithili</li>
        <li>Bhojpuri</li>
        <li>Magahi</li>
        <li>Angika</li>
      </ul>

      <h5 class="mt-3">Festivals</h5>
      <ul>
        <li>Chhath Puja</li>
        <li>Sama-Chakeva</li>
        <li>Sonepur Mela</li>
      </ul>
    </div>
  `;
}


/* =======================================================
   CONTACT
======================================================= */
function renderContact() {
  fadeIn();

  document.getElementById("app").innerHTML = `
    <div class="section-box">
      <h2>Contact</h2>
      <p><strong>Team Members:</strong></p>
      <p>Aman Choudhary</p>
      <p>Sumit Kumar</p>
      <p>Shraddha Kumari</p>
      <p>Shreya Kumari</p>
      <p><strong>Email:</strong> a81417280@gmail.com</p>
      <p><strong>Phone:</strong> 8092174326</p>
    </div>
  `;
}


/* =======================================================
   ROUTER
======================================================= */
function router() {
  const route = location.hash.replace("#/", "");

  switch (route) {
    case "":
      renderHome();
      break;
    case "gallery":
      renderGallery();
      break;
    case "timeline":
      renderTimeline();
      break;
    case "about":
      renderAbout();
      break;
    case "contact":
      renderContact();
      break;
    default:
      // Fallback for an unknown route
      renderHome();
  }
}

// Set the current year in the footer/element with id="year"
document.getElementById("year").textContent = new Date().getFullYear();

/* EVENTS */
// Listener for hash changes (navigation clicks)
window.addEventListener("hashchange", router);
// Listener for initial page load - **FIXED** the syntax error here
window.addEventListener("load", router);