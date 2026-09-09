"use strict";

// ============================================================
// 1. UTILITAIRES
// ============================================================
const basculerClasse = (el) => el.classList.toggle("actif");

// ============================================================
// 2. BARRE LATÉRALE (ouverture / fermeture)
// ============================================================
const barreLaterale = document.querySelector("[data-barre]");
const boutonInfo = document.querySelector("[data-btn-info]");
if (boutonInfo) {
  boutonInfo.addEventListener("click", () => basculerClasse(barreLaterale));
}

// ============================================================
// 3. DONNÉES DES PROJETS
// ============================================================
const PROJETS_DATA = [
  {
    id: "ramp",
    nom: "RAMP",
    categorie: "WEB",
    description:
      "Outil web pour générer des numéros au hasard au format Malagasy, copier des caractères UTF-8 et sélecteur de couleur.",
    technologies: "HTML5, CSS3, JavaScript",
    vignette: "iconramp.png",
    prefixe: "ramp",
    lien: "https://johanes-mg.github.io/Outils-Ramp/ramp.html",
  },
  {
    id: "jojohexpress",
    nom: "JojohExpress",
    categorie: "WEB",
    description:
      "Site web de réservation et de gestion de colis, d'ajouter, modifier ou effacer des conducteurs et les véhicules de transport.",
    technologies: "HTML5, CSS3, JavaScript, PHP",
    vignette: "iconjojohexpress.png",
    prefixe: "jojohexpress",
    lien: "https://github.com/Johanes-mg/JojohExpress",
  },
  {
    id: "schoolar",
    nom: "Schoolar",
    categorie: "WEB",
    description:
      "Plateforme web qui permet de faire la gestion des enseignants d'un établissement scolaire avec graphiques interactifs.",
    technologies: "React, PHP, Vue.js",
    vignette: "iconschoolar.png",
    prefixe: "schoolar",
    lien: "https://github.com/Johanes-mg/Schoolar",
  },
  {
    id: "copyboost",
    nom: "CopyBoost",
    categorie: "DESKTOP",
    description:
      "Utilitaire de copie rapide des fichiers basé sur le programme Robocopy.",
    technologies: "C#, .NET 8.0, Robocopy",
    vignette: "iconcopyboost.png",
    prefixe: "copyboostcsharp",
    lien: "https://github.com/Johanes-mg/CopyBoost",
  },
  {
    id: "jbacc",
    nom: "JBacc",
    categorie: "MOBILE",
    description:
      "Application mobile d'aide à la préparation du baccalauréat avec sujets et exercices intégrés.",
    technologies: "Kotlin, Android",
    vignette: "iconjbacc.png",
    prefixe: "jbacckotlin",
    lien: "https://github.com/Johanes-mg/JBacc",
  },
  {
    id: "jnotes",
    nom: "JNotes",
    categorie: "MOBILE",
    description: "Application de calcul de notes avec leurs catégories.",
    technologies: "Kotlin, Android",
    vignette: "iconjnotes.png",
    prefixe: "jnoteskotlin",
    lien: "https://github.com/Johanes-mg/JNotes",
  },
  {
    id: "jhotel",
    nom: "JHotel",
    categorie: "MOBILE",
    description:
      "Application de gestion hôtelière : réservation des chambres, gestion des clients et facturation.",
    technologies: "Kotlin, Android",
    vignette: "iconjhotel.png",
    prefixe: "jhotelkotlin",
    lien: "https://github.com/Johanes-mg/JHotel",
  },
  {
    id: "marv",
    nom: "Marv",
    categorie: "WEB",
    description:
      "Site vitrine pour un jeune producteur musical. Présentation de l'artiste, de ses services et de son univers musical.",
    technologies: "HTML5, CSS3, JavaScript",
    vignette: "iconmarv.png",
    prefixe: "marv",
    lien: "https://johanes-mg.github.io/Marvonthebeat/",
  },
];

// ============================================================
// 4. GÉNÉRATION DES PROJETS
// ============================================================
const listeProjets = document.getElementById("liste-projets");

function genererProjetHTML(projet) {
  return `
    <li class="item-projet actif" data-filtre-item data-categorie="${projet.categorie}" data-projet-id="${projet.id}">
      <a href="#" onclick="ouvrirLightboxProjet('${projet.id}'); return false;" aria-label="Voir le projet ${projet.nom}">
        <figure class="image-projet">
          <div class="icone-oeil">
            <img src="./images/search.png" width="24" height="24" loading="lazy" alt="Zoom" />
          </div>
          <img src="./images/projet/${projet.vignette}" loading="lazy" width="640" height="360" alt="${projet.nom}" />
        </figure>
        <h3 class="titre-projet">${projet.nom}</h3>
        <p class="categorie-projet">${projet.categorie} - ${projet.technologies}</p>
      </a>
      <div class="description-projet">
        <p>${projet.description}</p>
      </div>
      <div class="info-projet">
        <a href="${projet.lien}" target="_blank" rel="noopener noreferrer" class="lien-projet">Lien</a>
      </div>
    </li>
  `;
}

PROJETS_DATA.forEach((projet) => {
  listeProjets.innerHTML += genererProjetHTML(projet);
});

// ============================================================
// 5. LIGHTBOX PROJETS
// ============================================================
let lightboxImages = [];
let lightboxIndex = 0;
let isLightboxProjet = false;

// Éléments DOM de la lightbox
const lightboxOverlay = document.querySelector(".lightbox-overlay");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitre = document.getElementById("lightbox-titre");
const lightboxCounter = document.getElementById("lightbox-counter");
const navButtons = document.querySelectorAll(".btn-nav-lightbox");

function ouvrirLightboxProjet(projectId) {
  const projet = PROJETS_DATA.find((p) => p.id === projectId);
  if (!projet) return;

  isLightboxProjet = true;
  const images = [];
  let i = 1;

  function verifierImageSuivante() {
    const imgPath = `./images/projet/${projet.prefixe}_${i}.png`;
    const img = new Image();
    img.onload = () => {
      images.push(imgPath);
      i++;
      verifierImageSuivante();
    };
    img.onerror = () => terminerDetection();
    img.src = imgPath;
  }

  function terminerDetection() {
    lightboxImages = images;
    lightboxIndex = 0;

    navButtons.forEach((btn) => (btn.style.display = "flex"));

    if (images.length === 0) {
      lightboxImage.src = `./images/projet/${projet.vignette}`;
      lightboxTitre.textContent = projet.nom;
      lightboxCounter.textContent = "1 / 1";
    } else {
      lightboxImage.src = images[0];
      lightboxTitre.textContent = projet.nom;
      lightboxCounter.textContent = `1 / ${images.length}`;
    }

    lightboxOverlay.classList.add("actif");
    document.body.style.overflow = "hidden";
  }

  verifierImageSuivante();
}

function fermerLightbox() {
  lightboxOverlay.classList.remove("actif");
  document.body.style.overflow = "";
  lightboxImages = [];
  lightboxIndex = 0;
  isLightboxProjet = false;
  navButtons.forEach((btn) => (btn.style.display = "flex"));
}

function navLightbox(direction) {
  if (lightboxImages.length === 0) return;

  lightboxIndex += direction;
  if (lightboxIndex < 0) lightboxIndex = lightboxImages.length - 1;
  if (lightboxIndex >= lightboxImages.length) lightboxIndex = 0;

  const imgPath = lightboxImages[lightboxIndex];
  const testImg = new Image();
  testImg.onload = () => {
    lightboxImage.src = imgPath;
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  };
  testImg.onerror = () => navLightbox(direction > 0 ? 1 : -1);
  testImg.src = imgPath;
}

// ============================================================
// 6. LIGHTBOX PHOTO DE PROFIL
// ============================================================
const avatar = document.querySelector(".cadre-avatar img");

if (avatar && lightboxOverlay) {
  avatar.addEventListener("click", (e) => {
    e.stopPropagation();

    isLightboxProjet = false;
    lightboxImage.src = avatar.src;
    lightboxTitre.textContent = "Photo de profil";
    lightboxCounter.textContent = "1 / 1";

    // Masquer les boutons de navigation (une seule image)
    navButtons.forEach((btn) => (btn.style.display = "none"));

    lightboxOverlay.classList.add("actif");
    document.body.style.overflow = "hidden";
  });
}

// ============================================================
// 7. GESTION DE LA LIGHTBOX (clics, touches, swipe, drag)
// ============================================================

// --- Fermeture ---
document
  .querySelector(".btn-fermer-lightbox")
  ?.addEventListener("click", fermerLightbox);

// --- Clic sur l'overlay (pour fermer) ---
lightboxOverlay?.addEventListener("click", (e) => {
  if (e.target === lightboxOverlay) fermerLightbox();
});

// --- Touches clavier ---
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") return fermerLightbox();
  if (!lightboxOverlay.classList.contains("actif")) return;
  if (e.key === "ArrowLeft") navLightbox(-1);
  if (e.key === "ArrowRight") navLightbox(1);
});

// --- Swipe tactile ---
let touchStartX = 0,
  touchStartY = 0,
  touchEndX = 0,
  touchEndY = 0,
  isSwiping = false;

lightboxOverlay?.addEventListener(
  "touchstart",
  (e) => {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    isSwiping = false;
  },
  { passive: true },
);

lightboxOverlay?.addEventListener(
  "touchmove",
  (e) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    touchEndX = touch.clientX;
    touchEndY = touch.clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
      isSwiping = true;
      e.preventDefault();
    }
  },
  { passive: false },
);

lightboxOverlay?.addEventListener(
  "touchend",
  () => {
    if (!isSwiping) return;
    const diffX = touchStartX - touchEndX;
    if (Math.abs(diffX) > 50) {
      navLightbox(diffX > 0 ? 1 : -1);
    }
    touchStartX = touchEndX = touchStartY = touchEndY = 0;
    isSwiping = false;
  },
  { passive: true },
);

// --- Drag souris ---
let mouseStartX = 0,
  mouseStartY = 0,
  isDragging = false;

lightboxOverlay?.addEventListener("mousedown", (e) => {
  if (e.target.closest("button")) return;
  mouseStartX = e.clientX;
  mouseStartY = e.clientY;
  isDragging = false;
});

lightboxOverlay?.addEventListener("mousemove", (e) => {
  if (mouseStartX === 0 && mouseStartY === 0) return;
  const diffX = mouseStartX - e.clientX;
  const diffY = mouseStartY - e.clientY;
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
    isDragging = true;
  }
});

lightboxOverlay?.addEventListener("mouseup", (e) => {
  if (mouseStartX === 0 && mouseStartY === 0) return;
  if (!isDragging) {
    if (e.target === lightboxOverlay) fermerLightbox();
    mouseStartX = mouseStartY = 0;
    isDragging = false;
    return;
  }
  const diffX = mouseStartX - e.clientX;
  if (Math.abs(diffX) > 50) {
    navLightbox(diffX > 0 ? 1 : -1);
  }
  mouseStartX = mouseStartY = 0;
  isDragging = false;
});

lightboxOverlay?.addEventListener("mouseleave", () => {
  mouseStartX = mouseStartY = 0;
  isDragging = false;
});

// ============================================================
// 8. FILTRES PROJETS
// ============================================================
const selectFiltre = document.querySelector("[data-select]");
const itemsSelect = document.querySelectorAll("[data-select-item]");
const valeurSelect = document.querySelector("[data-select-valeur]");
const boutonsFiltre = document.querySelectorAll("[data-btn-filtre]");
const itemsProjets = document.querySelectorAll("[data-filtre-item]");

selectFiltre?.addEventListener("click", function () {
  basculerClasse(this);
  const expanded =
    this.getAttribute("aria-expanded") === "true" ? "false" : "true";
  this.setAttribute("aria-expanded", expanded);
});

const filtrerProjets = (categorie) => {
  itemsProjets.forEach((projet) => {
    const cat = projet.dataset.categorie;
    projet.classList.toggle("actif", categorie === "tous" || categorie === cat);
  });
};

itemsSelect.forEach((item) => {
  item.addEventListener("click", function () {
    const categorie = this.dataset.categorie || this.textContent.toLowerCase();
    valeurSelect.textContent = this.textContent;
    basculerClasse(selectFiltre);
    selectFiltre?.setAttribute("aria-expanded", "false");
    filtrerProjets(categorie);

    boutonsFiltre.forEach((btn) => {
      btn.classList.remove("actif");
      btn.setAttribute("aria-selected", "false");
      const btnCat = btn.dataset.categorie || btn.textContent.toLowerCase();
      if (btnCat === categorie) {
        btn.classList.add("actif");
        btn.setAttribute("aria-selected", "true");
      }
    });
  });
});

let dernierBoutonClique = boutonsFiltre[0];
boutonsFiltre.forEach((btn) => {
  btn.addEventListener("click", function () {
    const categorie = this.dataset.categorie || this.textContent.toLowerCase();
    valeurSelect.textContent = this.textContent;
    filtrerProjets(categorie);
    dernierBoutonClique.classList.remove("actif");
    dernierBoutonClique.removeAttribute("aria-selected");
    this.classList.add("actif");
    this.setAttribute("aria-selected", "true");
    dernierBoutonClique = this;
  });
});

// ============================================================
// 9. CONTACT - SWITCH (WhatsApp / Gmail / LinkedIn)
// ============================================================
const switchOptions = document.querySelectorAll("[data-switch]");
const switchCurseur = document.querySelector("[data-switch-curseur]");
const btnContact = document.querySelector("[data-btn-contact]");
const badgeIcon = document.getElementById("badge-icon");
const badgeMethode = document.getElementById("badge-methode");
const badgeValeur = document.getElementById("badge-valeur");

const INFOS = {
  whatsapp: {
    icone: "./images/telephone.png",
    methode: "WhatsApp",
    valeur: "+261 38 75 879 59",
    url: "https://wa.me/261387587959",
  },
  gmail: {
    icone: "./images/gmail.png",
    methode: "Gmail",
    valeur: "johanesfalitiana@gmail.com",
    url: "mailto:falitianajohanes@gmail.com",
  },
  linkedin: {
    icone: "./images/linkedin.png",
    methode: "LinkedIn",
    valeur: "Johanès Falitiana",
    url: "https://www.linkedin.com/in/johan%C3%A8s-falitiana-335456431",
  },
};

let methodeActuelle = "whatsapp";

function mettreAJourSwitch(methode) {
  switchOptions.forEach((opt) => {
    opt.classList.toggle("actif", opt.dataset.switch === methode);
  });

  switchCurseur.classList.remove(
    "position-gauche",
    "position-centre",
    "position-droite",
  );
  if (methode === "gmail") switchCurseur.classList.add("position-gauche");
  else if (methode === "whatsapp")
    switchCurseur.classList.add("position-centre");
  else if (methode === "linkedin")
    switchCurseur.classList.add("position-droite");

  methodeActuelle = methode;

  btnContact?.classList.remove(
    "methode-whatsapp",
    "methode-gmail",
    "methode-linkedin",
  );
  btnContact?.classList.add("methode-" + methode);

  const info = INFOS[methode];
  if (badgeIcon) badgeIcon.src = info.icone;
  if (badgeMethode) badgeMethode.textContent = info.methode;
  if (badgeValeur) badgeValeur.textContent = info.valeur;
}

switchOptions.forEach((option) => {
  option.addEventListener("click", () =>
    mettreAJourSwitch(option.dataset.switch),
  );
});

mettreAJourSwitch("whatsapp");

btnContact?.addEventListener("click", () => {
  const info = INFOS[methodeActuelle];
  if (info) window.open(info.url, "_blank");
});

// ============================================================
// 10. NAVIGATION ENTRE LES PAGES
// ============================================================
const liensNavigation = document.querySelectorAll("[data-page-nav]");
const pages = document.querySelectorAll("[data-page]");

liensNavigation.forEach((lien) => {
  lien.addEventListener("click", function () {
    const nomPage = this.textContent.toLowerCase().trim();

    pages.forEach((page) => {
      const nomPageActuelle = page.dataset.page.toLowerCase().trim();
      page.classList.toggle("actif", nomPage === nomPageActuelle);
    });

    liensNavigation.forEach((nav) => {
      nav.classList.remove("actif");
      nav.removeAttribute("aria-current");
    });

    this.classList.add("actif");
    this.setAttribute("aria-current", "page");

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.innerWidth < 1024 && barreLaterale) {
      barreLaterale.classList.remove("actif");
    }
  });
});

// ============================================================
// 11. THÈME (clair / sombre)
// ============================================================
let themeSombre = true;

function basculerTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");
  if (themeSombre) {
    body.classList.add("theme-clair");
    if (themeIcon) themeIcon.src = "./images/icone-lune.png";
    themeSombre = false;
  } else {
    body.classList.remove("theme-clair");
    if (themeIcon) themeIcon.src = "./images/icone-soleil.png";
    themeSombre = true;
  }
  try {
    localStorage.setItem("theme", themeSombre ? "sombre" : "clair");
  } catch (_) {}
}

try {
  if (localStorage.getItem("theme") === "clair") basculerTheme();
} catch (_) {}

// ============================================================
// 12. TÉLÉCHARGEMENT DU CV
// ============================================================
const NOM_FICHIER_CV = "RANAIVOJAONA Falitiana Johanes.pdf";

function telechargerCV() {
  const lien = document.createElement("a");
  lien.href = NOM_FICHIER_CV;
  lien.download = "CV_Johanes_Falitiana.pdf";
  document.body.appendChild(lien);
  lien.click();
  document.body.removeChild(lien);
}
