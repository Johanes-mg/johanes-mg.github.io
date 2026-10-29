"use strict";

const basculerClasse = (el) => el.classList.toggle("actif");

const barreLaterale = document.querySelector("[data-barre]");
const boutonInfo = document.querySelector("[data-btn-info]");
if (boutonInfo) {
  boutonInfo.addEventListener("click", () => basculerClasse(barreLaterale));
}

const PROJETS_DATA = [
  {
    id: "ramp",
    nom: "RAMP",
    categorie: "WEB",
    description:
      "Outil web pour générer des numéros au hasard au format Malagasy, copier des caractères UTF-8 et sélecteur de couleur.",
    technologies: "HTML5, CSS3, JavaScript",
    vignette: "iconramp",
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
    vignette: "iconjojohexpress",
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
    vignette: "iconschoolar",
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
    vignette: "iconcopyboost",
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
    vignette: "iconjbacc",
    prefixe: "jbacckotlin",
    lien: "https://github.com/Johanes-mg/JBacc",
  },
  {
    id: "jnotes",
    nom: "JNotes",
    categorie: "MOBILE",
    description: "Application de calcul de notes avec leurs catégories.",
    technologies: "Kotlin, Android",
    vignette: "iconjnotes",
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
    vignette: "iconjhotel",
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
    vignette: "iconmarv",
    prefixe: "marv",
    lien: "https://marvnathanael-4kgx.vercel.app",
  },
  {
    id: "julieanna",
    nom: "Julieanna",
    categorie: "WEB",
    description:
      "Site vitrine présentant le parcours, les formations et les compétences d'une consultante en administration des affaires.",
    technologies: "HTML5, CSS3, JavaScript",
    vignette: "iconjulieanna",
    prefixe: "julieanna",
    lien: "https://julieanna.vercel.app/",
  },
  {
    id: "olympia",
    nom: "Olympia",
    categorie: "DESKTOP",
    description:
      "Quiz immersif sur la mythologie grecque : 360 questions, 3 niveaux de difficulté et 4 chapitres à conquérir.",
    technologies: "C#, WPF, .NET 8.0, NAudio",
    vignette: "iconolympia",
    prefixe: "olympia",
    lien: "https://github.com/Johanes-mg/Olympia",
  },
  {
    id: "tradevelvet",
    nom: "TradeVelvet",
    categorie: "WEB",
    description:
      "Le marketplace où chaque compte devient une boutique. Publie, vends, suis tes vendeurs préférés.",
    technologies: "React, Node.js, Express, MySQL",
    vignette: "icontradevelvet",
    prefixe: "tradevelvet",
    lien: "https://github.com/Johanes-mg/TradeVelvet",
  },
  {
    id: "mangachrono",
    nom: "Manga Chrono",
    categorie: "MOBILE",
    description:
      "Quiz sur la culture manga et anime : 100 niveaux à débloquer, 100 questions, top chrono",
    technologies: "Kotlin, Android",
    vignette: "iconmangachrono",
    prefixe: "mangachrono",
    lien: "https://github.com/Johanes-mg/MangaChrono",
  },
  {
    id: "edt",
    nom: "EDT",
    categorie: "WEB",
    description:
      "Éditeur visuel d'emploi du temps scolaire. Créez votre semaine, colorez chaque matière.",
    technologies: "HTML5, CSS3, JavaScript",
    vignette: "iconedt",
    prefixe: "edt",
    lien: "https://johanes-mg.github.io/EDT",
  },
  {
    id: "pointage_sharp",
    nom: "Pointage_sharp",
    categorie: "DESKTOP",
    description:
      "Application Desktop pour gérer la présence de votre personnel, sans complication.",
    technologies: "C#,SQLite",
    vignette: "iconpointagesharp",
    prefixe: "pointagesharp",
    lien: "https://github.com/Johanes-mg/Pointage_sharp",
  },
  {
    id: "pointage_rust",
    nom: "Pointage_rust",
    categorie: "DESKTOP",
    description:
      "Application Desktop pour gérer la présence de votre personnel, sans complication refaite en pure Rust.",
    technologies: "Rust,SQLite",
    vignette: "iconpointagerust",
    prefixe: "pointagerust",
    lien: "https://github.com/Johanes-mg/Pointage_rust",
  },
  {
    id: "lechapes",
    nom: "Lechapes",
    categorie: "DESKTOP",
    description: "Éditeur de texte multi-onglets combinant explorateur de fichiers, gestion des encodages, recherche avec double thème et interface multilingue",
    technologies: "Rust",
    vignette: "iconlechapes",
    prefixe: "lechapes",
    lien: "https://github.com/Johanes-mg/Lechapes",
  },
  {
    id: "joinus",
    nom: "Joinus",
    categorie: "DESKTOP",
    description: "essagerie locale pour réseaux partagés permettant la découverte automatique des personnes connectées et l'échange de messages instantanés.",
    technologies: "Rust",
    vignette: "iconjoinus",
    prefixe: "joinus",
    lien: "https://github.com/Johanes-mg/Joinus",
  },
{
    id: "eden",
    nom: "Eden",
    categorie: "WEB",
    description:
      "Sélection exigeante de logiciels libres, gratuits ou payants, choisis pour leur sobriété et leur absence de suivi",
    technologies: "HTML5, CSS3, JavaScript",
    vignette: "iconeden",
    prefixe: "eden",
    lien: "https://johanes-mg.github.io/Eden",
  },
];

const TRADUCTIONS = {
  en: {
    role_developer: "Developer",
    role_allrounder: "All-rounder",
    show_contacts: "Show contacts",
    contact_email: "Email",
    contact_phone: "Phone",
    contact_birthday: "Birthday",
    contact_birthday_value: "July 13, 2006",
    contact_location: "Location",
    contact_location_value: "Fianarantsoa, Madagascar",
    nav_about: "About",
    nav_career: "Career",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    about_title: "About me",
    about_p1:
      "I am RANAIVOJAONA Falitiana Johanès, a passionate developer based in Fianarantsoa, Madagascar. I work on various projects ranging from desktop and mobile development to the web, as well as multimedia creation. I enjoy turning complex problems into simple, functional and aesthetic solutions.",
    about_p2:
      "My goal is to create performant, ergonomic and visually appealing applications. I master several languages and technologies and adapt quickly to the needs of each project. I am also passionate about music, design and content creation.",
    services_title: "What I do",
    service_desktop_mobile_title: "Desktop & Mobile Development",
    service_desktop_mobile_text:
      "Design of desktop applications with C++, C#, Python, Qt6 and Android mobile applications with Kotlin.",
    service_web_title: "Web Development",
    service_web_text:
      "Design of websites and web applications with HTML, CSS, JavaScript, PHP, React and databases.",
    service_multi_title: "Multimedia",
    service_multi_text:
      "Creation of visual and audio content: graphic design, music production and UI/UX Design.",
    service_office_title: "Office Suites",
    service_office_text:
      "Mastery of Microsoft Office (Word, Excel, PowerPoint, Access) for data management, analysis and presentation.",
    cv_title: "Resume",
    cv_description: "Download my resume for a summary",
    cv_download: "Download",
    career_title: "Career",
    career_academic: "Academic",
    career_l2: "Second year of Bachelor's degree",
    career_l2_text: "École Nationale d'Informatique de Fianarantsoa.",
    career_l1: "First year of Bachelor's degree",
    career_l1_text: "École Nationale d'Informatique de Fianarantsoa.",
    career_bac: "Baccalaureate",
    career_bac_text: "Baccalaureate series D.",
    career_bepc: "BEPC",
    career_bepc_text: "Brevet d'Études du Premier Cycle.",
    career_cepe: "CEPE",
    career_cepe_text: "Certificat d'Études Primaires Élémentaires.",
    career_training: "Training",
    career_fr: "French",
    career_fr_text: "Alliance Française de Fianarantsoa",
    career_en: "English",
    career_en_text: "International Tesol/TEFL Training Institute",
    career_office: "Office suite at CFEI",
    career_office_text:
      "Centre de Formation en Électronique et Informatique.",
    career_experience: "Experience",
    career_personal: "Personal Projects",
    career_personal_text:
      "Development of web, mobile and desktop applications presented in the Projects section.",
    skills_title: "My skills",
    skills_office: "Office Suites",
    skills_web: "Web Development",
    skills_desktop: "Desktop Development",
    skills_mobile: "Mobile Development",
    skills_db: "Databases",
    skills_os: "Operating Systems",
    skills_design: "Multimedia & Design",
    skills_languages: "Languages",
    skills_licenses: "Driving licenses",
    projects_title: "Projects",
    filter_all: "All",
    filter_web: "Web",
    filter_mobile: "Mobile",
    filter_desktop: "Desktop",
    filter_select: "Select a category",
    contact_title: "Contact",
    contact_intro: "Choose your preferred contact method:",
    contact_button: "Contact",
    profile_picture: "Profile picture",
    link_label: "Link",
    view_project: "View project",
  },
  fr: {
    role_developer: "Développeur",
    role_allrounder: "All-rounder",
    show_contacts: "Afficher les contacts",
    contact_email: "Email",
    contact_phone: "Téléphone",
    contact_birthday: "Anniversaire",
    contact_birthday_value: "13 Juillet 2006",
    contact_location: "Localisation",
    contact_location_value: "Fianarantsoa, Madagascar",
    nav_about: "À propos",
    nav_career: "Parcours",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_contact: "Contact",
    about_title: "À propos de moi",
    about_p1:
      "Je suis RANAIVOJAONA Falitiana Johanès, un développeur passionné basé à Fianarantsoa, Madagascar. Je travaille sur divers projets allant du développement desktop et mobile au web, en passant par la création multimédia. J'aime transformer des problèmes complexes en solutions simples, fonctionnelles et esthétiques.",
    about_p2:
      "Mon objectif est de créer des applications performantes, ergonomiques et visuellement attrayantes. Je maîtrise plusieurs langages et technologies et je m'adapte rapidement aux besoins de chaque projet. Je suis également passionné par la musique, le design et la création de contenu.",
    services_title: "Ce que je fais",
    service_desktop_mobile_title: "Développement Desktop & Mobile",
    service_desktop_mobile_text:
      "Conception d'applications desktop avec C++, C#, Python, Qt6 et d'applications mobiles Android avec Kotlin.",
    service_web_title: "Développement Web",
    service_web_text:
      "Conception de sites web et applications web avec HTML, CSS, JavaScript, PHP, React et bases de données.",
    service_multi_title: "Multimédia",
    service_multi_text:
      "Création de contenu visuel et audio : design graphique, production musicale et UI/UX Design.",
    service_office_title: "Bureautique",
    service_office_text:
      "Maîtrise de la suite Microsoft Office (Word, Excel, PowerPoint, Access) pour la gestion, l'analyse et la présentation de données.",
    cv_title: "Curriculum Vitæ",
    cv_description: "Télécharger mon CV pour avoir le résumé",
    cv_download: "Télécharger",
    career_title: "Parcours",
    career_academic: "Académique",
    career_l2: "Deuxième année de Licence",
    career_l2_text: "École Nationale d'Informatique de Fianarantsoa.",
    career_l1: "Première année de Licence",
    career_l1_text: "École Nationale d'Informatique de Fianarantsoa.",
    career_bac: "Baccalauréat",
    career_bac_text: "Baccalauréat série D.",
    career_bepc: "BEPC",
    career_bepc_text: "Brevet d'Études du Premier Cycle.",
    career_cepe: "CEPE",
    career_cepe_text: "Certificat d'Études Primaires Élémentaires.",
    career_training: "Formation",
    career_fr: "Français",
    career_fr_text: "Alliance Française de Fianarantsoa",
    career_en: "Anglais",
    career_en_text: "International Tesol/TEFL Training Institute",
    career_office: "Bureautique à CFEI",
    career_office_text:
      "Centre de Formation en Électronique et Informatique.",
    career_experience: "Expérience",
    career_personal: "Projets Personnels",
    career_personal_text:
      "Développement d'applications web, mobiles et desktop présentées dans la section Projets.",
    skills_title: "Mes compétences",
    skills_office: "Bureautiques",
    skills_web: "Développement Web",
    skills_desktop: "Développement Desktop",
    skills_mobile: "Développement Mobile",
    skills_db: "Bases de données",
    skills_os: "Systèmes d'exploitation",
    skills_design: "Multimédia & Design",
    skills_languages: "Langues",
    skills_licenses: "Permis de conduire",
    projects_title: "Projets",
    filter_all: "Tous",
    filter_web: "Web",
    filter_mobile: "Mobile",
    filter_desktop: "Desktop",
    filter_select: "Sélectionner une catégorie",
    contact_title: "Contact",
    contact_intro: "Choisissez votre méthode de contact préférée :",
    contact_button: "Contacter",
    profile_picture: "Photo de profil",
    link_label: "Lien",
    view_project: "Voir le projet",
  },
};

let langueActuelle = "en";

const IMAGES_MAP = new Map();

const listeProjets = document.getElementById("liste-projets");
let projetsGeneres = false;

function nomFichierSansExt(nom) {
  return nom.replace(/\.[^.]+$/, "");
}

function construireMapImages() {
  return fetch("./images/projet/index.json")
    .then((r) => (r.ok ? r.json() : []))
    .then((liste) => {
      IMAGES_MAP.clear();
      liste.forEach((nom) => {
        IMAGES_MAP.set(nomFichierSansExt(nom), nom);
      });
    })
    .catch(() => {
      IMAGES_MAP.clear();
    });
}

function urlImage(base) {
  const fichier = IMAGES_MAP.get(base);
  if (fichier) return `./images/projet/${fichier}`;
  return `./images/projet/${base}.jpg`;
}

function genererProjetHTML(projet) {
  const t = TRADUCTIONS[langueActuelle] || TRADUCTIONS.en;
  return `
    <li class="item-projet actif" data-filtre-item data-categorie="${projet.categorie}" data-projet-id="${projet.id}">
      <a href="#" onclick="ouvrirLightboxProjet('${projet.id}'); return false;" aria-label="${t.view_project} ${projet.nom}">
        <figure class="image-projet">
          <div class="icone-oeil">
            <img src="./images/search.png" alt="" width="32" height="32" loading="lazy" decoding="async" />
          </div>
          <img src="${urlImage(projet.vignette)}" alt="${projet.nom}" loading="lazy" decoding="async" width="640" height="360" />
        </figure>
        <h3 class="titre-projet">${projet.nom}</h3>
        <p class="categorie-projet">${projet.categorie} - ${projet.technologies}</p>
      </a>
      <div class="description-projet">
        <p>${projet.description}</p>
      </div>
      <div class="info-projet">
        <a href="${projet.lien}" target="_blank" rel="noopener noreferrer" class="lien-projet">${t.link_label}</a>
      </div>
    </li>
  `;
}

function genererProjetsSiBesoin() {
  if (projetsGeneres || !listeProjets) return;
  projetsGeneres = true;
  construireMapImages().then(() => {
    listeProjets.innerHTML = PROJETS_DATA.map(genererProjetHTML).join("");
  });
}

let lightboxImages = [];
let lightboxIndex = 0;
let isLightboxProjet = false;

const lightboxOverlay = document.querySelector(".lightbox-overlay");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitre = document.getElementById("lightbox-titre");
const lightboxCounter = document.getElementById("lightbox-counter");
const navButtons = document.querySelectorAll(".btn-nav-lightbox");

async function ouvrirLightboxProjet(projectId) {
  const projet = PROJETS_DATA.find((p) => p.id === projectId);
  if (!projet) return;

  await construireMapImages();

  isLightboxProjet = true;
  const images = [];

  for (let i = 1; i <= 50; i++) {
    const fichier = IMAGES_MAP.get(`${projet.prefixe}_${i}`);
    if (!fichier) break;
    images.push(`./images/projet/${fichier}`);
  }

  lightboxImages = images;
  lightboxIndex = 0;

  navButtons.forEach(
    (btn) => (btn.style.display = images.length > 1 ? "flex" : "none"),
  );

  if (images.length === 0) {
    lightboxImage.src = urlImage(projet.vignette);
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

const avatar = document.querySelector(".cadre-avatar img");

if (avatar && lightboxOverlay) {
  avatar.addEventListener("click", (e) => {
    e.stopPropagation();

    isLightboxProjet = false;
    lightboxImage.src = avatar.src;
    const t = TRADUCTIONS[langueActuelle] || TRADUCTIONS.en;
    lightboxTitre.textContent = t.profile_picture;
    lightboxCounter.textContent = "1 / 1";

    navButtons.forEach((btn) => (btn.style.display = "none"));

    lightboxOverlay.classList.add("actif");
    document.body.style.overflow = "hidden";
  });
}

document
  .querySelector(".btn-fermer-lightbox")
  ?.addEventListener("click", fermerLightbox);

lightboxOverlay?.addEventListener("click", (e) => {
  if (e.target === lightboxOverlay) fermerLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") return fermerLightbox();
  if (!lightboxOverlay.classList.contains("actif")) return;
  if (e.key === "ArrowLeft") navLightbox(-1);
  if (e.key === "ArrowRight") navLightbox(1);
});

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

const selectFiltre = document.querySelector("[data-select]");
const itemsSelect = document.querySelectorAll("[data-select-item]");
const valeurSelect = document.querySelector("[data-select-valeur]");
const boutonsFiltre = document.querySelectorAll("[data-btn-filtre]");

selectFiltre?.addEventListener("click", function () {
  basculerClasse(this);
  const expanded =
    this.getAttribute("aria-expanded") === "true" ? "false" : "true";
  this.setAttribute("aria-expanded", expanded);
});

const filtrerProjets = (categorie) => {
  const itemsProjets = document.querySelectorAll("[data-filtre-item]");
  itemsProjets.forEach((projet) => {
    const cat = projet.dataset.categorie;
    projet.classList.toggle("actif", categorie === "tous" || categorie === cat);
  });
};

itemsSelect.forEach((item) => {
  item.addEventListener("click", function () {
    genererProjetsSiBesoin();
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
    genererProjetsSiBesoin();
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

const switchOptions = document.querySelectorAll("[data-switch]");
const switchCurseur = document.querySelector("[data-switch-curseur]");
const btnContact = document.querySelector("[data-btn-contact]");
const badgeIcon = document.getElementById("badge-icon");
const badgeMethode = document.getElementById("badge-methode");
const badgeValeur = document.getElementById("badge-valeur");

const INFOS = {
  whatsapp: {
    icone: "./images/whatsapp.png",
    methode: "WhatsApp",
    valeur: "+261 33 54 297 82",
    url: "https://wa.me/261335429782",
  },
  gmail: {
    icone: "./images/gmail.png",
    methode: "Gmail",
    valeur: "falitianajohanes@gmail.com",
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

  const contactSection = document.querySelector(".contact-section");
  if (contactSection) {
    contactSection.classList.remove(
      "methode-whatsapp",
      "methode-gmail",
      "methode-linkedin",
    );
    contactSection.classList.add("methode-" + methode);
  }

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

const langueBtn = document.querySelector("[data-langue-btn]");
const langueSelect = document.querySelector("[data-langue-select]");
const langueDrapeau = document.querySelector("[data-langue-drapeau]");
const langueNom = document.querySelector("[data-langue-nom]");
const langueItems = document.querySelectorAll("[data-langue-item]");

function appliquerLangue(langue) {
  langueActuelle = langue;
  const trad = TRADUCTIONS[langue];
  if (!trad) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const cle = el.dataset.i18n;
    if (trad[cle] !== undefined) {
      el.textContent = trad[cle];
    }
  });

  if (langueDrapeau) {
    langueDrapeau.textContent = langue === "fr" ? "🇫🇷" : "🇬🇧";
  }
  if (langueNom) {
    langueNom.textContent = langue === "fr" ? "Français" : "English";
  }

  try {
    localStorage.setItem("langue", langue);
  } catch (_) {}

  document.documentElement.lang = langue;

  if (projetsGeneres && listeProjets) {
    listeProjets.innerHTML = PROJETS_DATA.map(genererProjetHTML).join("");
    const actif = document.querySelector("[data-btn-filtre].actif");
    if (actif) {
      filtrerProjets(actif.dataset.categorie || "tous");
    }
  }
}

if (langueBtn && langueSelect) {
  langueBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langueSelect.classList.toggle("actif");
    langueBtn.setAttribute(
      "aria-expanded",
      langueSelect.classList.contains("actif") ? "true" : "false",
    );
  });

  langueItems.forEach((item) => {
    item.addEventListener("click", () => {
      appliquerLangue(item.dataset.langue);
      langueSelect.classList.remove("actif");
      langueBtn?.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (e) => {
    if (!langueSelect.contains(e.target)) {
      langueSelect.classList.remove("actif");
      langueBtn?.setAttribute("aria-expanded", "false");
    }
  });
}

try {
  const langueSauvegarde = localStorage.getItem("langue");
  appliquerLangue(langueSauvegarde === "fr" ? "fr" : "en");
} catch (_) {
  appliquerLangue("en");
}

const liensNavigation = document.querySelectorAll("[data-page-nav]");
const pages = document.querySelectorAll("[data-page]");

liensNavigation.forEach((lien) => {
  lien.addEventListener("click", function () {
    const cible = this.dataset.pageTarget;

    if (cible === "projets") genererProjetsSiBesoin();

    pages.forEach((page) => {
      const nomPageActuelle = page.dataset.page.toLowerCase().trim();
      page.classList.toggle("actif", cible === nomPageActuelle);
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

const themeToggle = document.getElementById("theme");
let themeSombre = true;

function appliquerTheme(sombre) {
  themeSombre = sombre;

  document.body.classList.toggle("theme-clair", !sombre);

  if (themeToggle && themeToggle.checked !== sombre) {
    themeToggle.checked = sombre;
  }

  try {
    localStorage.setItem("theme", sombre ? "sombre" : "clair");
  } catch (_) {}
}

if (themeToggle) {
  themeToggle.addEventListener("change", () => {
    appliquerTheme(themeToggle.checked);
  });
}

try {
  const themeSauvegarde = localStorage.getItem("theme");
  if (themeSauvegarde === "clair") {
    appliquerTheme(false);
  } else {
    appliquerTheme(true);
  }
} catch (_) {
  appliquerTheme(true);
}

document.documentElement.classList.remove("theme-clair-preload");

const FICHIER_CV = "RANAIVOJAONA Falitiana Johanes.pdf";

function telechargerCV() {
  const lien = document.createElement("a");
  lien.href = encodeURI(FICHIER_CV);
  lien.download = FICHIER_CV;
  document.body.appendChild(lien);
  lien.click();
  document.body.removeChild(lien);
}
