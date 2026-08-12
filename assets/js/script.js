'use strict';

// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {
  es: {
    show_contacts: "Mostrar Contactos",
    hide_contacts: "Ocultar Contactos",
    email: "Email",
    phone: "Teléfono",
    location: "Ubicación",
    about_me: "Sobre mí",
    resume: "Curriculum",
    portfolio: "Portfolio",
    contact: "Contacto",
    about_title: "Sobre mí",
    about_text_1: "Soy un Full Stack Software Developer con experiencia en el desarrollo de sistemas empresariales, APIs y aplicaciones web escalables. Me especializo en PHP/Laravel, bases de datos y arquitectura de software.",
    about_text_2: "Mi enfoque está en crear soluciones robustas y mantenibles que resuelvan problemas reales de negocio. Disfruto refactorizar código legado, optimizar rendimiento y construir herramientas que faciliten el trabajo de los equipos.",
    what_i_do: "Lo que hago",
    backend_dev: "Desarrollo Backend",
    backend_desc: "APIs REST, microservicios, autenticación y lógica de negocio con Laravel, Lumen y PHP.",
    frontend_dev: "Desarrollo Frontend",
    frontend_desc: "Interfaces interactivas y dashboards administrativos con Livewire, AlpineJS y JavaScript.",
    devops_cloud: "DevOps y Cloud",
    devops_desc: "Despliegue con Docker, servicios en AWS y automatización de procesos en la nube.",
    db_optimization: "Optimización de BD",
    db_desc: "Consultas optimizadas, índices avanzados y normalización en SQL Server y MySQL.",
    technical_skills: "Habilidades Técnicas",
    education: "Educación",
    degree: "Ingeniería en Computación",
    experience: "Experiencia",
    present: "Actualidad",
    exp_polesa: "Refactorización de sistemas legados en PHP (CodeIgniter 3) hacia Laravel 12, logrando un código 70% más mantenible y fiable. Optimización de consultas en SQL Server en más del 85%. Desarrollo de nuevas funcionalidades para la manufactura de postes nacionales e internacionales.",
    exp_cactus: "Implementación de un panel administrativo con Filament 3.0, reduciendo el tiempo de gestión de pedidos en un 70%. Diseño de pruebas unitarias con PEST y documentación logrando una cobertura de código del 90%.",
    exp_enlace: "Creación de APIs REST usando microservicios para la automatización de facturación del SaaS, reduciendo errores en un 45%. Implementación de lambdas en AWS con Python, mejorando la fiabilidad del código en un 80%.",
    exp_homeosystems: "Desarrollo de sistemas utilizando Laravel, Livewire, Bootstrap y AWS. Integración de la API de Openpay, optimizando el proceso de compra en un 75%. Desarrollo de módulo administrativo para CRUD de pacientes, medicamentos, cursos y blog.",
    exp_softernium: "Diseño y desarrollo de dashboards de usuarios y sistema de gestión de roles, manejando perfiles para más de 100 usuarios. Generación de informes automáticos en PDF y CSV, reduciendo el tiempo de generación en más del 50%.",
    exp_cloud: "Desarrollo en distintos proyectos para uno de sus productos. Desarrollo del FrontEnd con HTML, CSS, JavaScript, jQuery, llamadas AJAX y Bases de Datos como MySQL y SQL Server, así como el BackEnd (PHP) para extraer los datos provenientes de un VoIP y plasmarlos en un Dashboard en tiempo real.",
    exp_robotica: "Asistencia en tareas de programación y desarrollo de software.",
    select_category: "Seleccionar categoría",
    project_polesa: "Polesa - Sistema de Manufactura",
    project_cactus: "Cactus Feliz - Panel Administrativo",
    project_enlace: "Enlace Fiscal - API de Facturación",
    project_homeosystems: "Homeosystems - Sistema de Salud",
    project_globalwifi: "Global WiFi - Dashboards",
    contact_form: "Formulario de Contacto",
    full_name: "Nombre completo",
    email_address: "Dirección de email",
    your_message: "Tu Mensaje",
    send_message: "Enviar Mensaje"
  },
  en: {
    show_contacts: "Show Contacts",
    hide_contacts: "Hide Contacts",
    email: "Email",
    phone: "Phone",
    location: "Location",
    about_me: "About me",
    resume: "Resume",
    portfolio: "Portfolio",
    contact: "Contact",
    about_title: "About me",
    about_text_1: "I'm a Full Stack Software Developer with experience building enterprise systems, APIs, and scalable web applications. I specialize in PHP/Laravel, databases, and software architecture.",
    about_text_2: "My focus is on creating robust and maintainable solutions that solve real business problems. I enjoy refactoring legacy code, optimizing performance, and building tools that make teams' work easier.",
    what_i_do: "What I do",
    backend_dev: "Backend Development",
    backend_desc: "REST APIs, microservices, authentication and business logic with Laravel, Lumen and PHP.",
    frontend_dev: "Frontend Development",
    frontend_desc: "Interactive interfaces and admin dashboards with Livewire, AlpineJS and JavaScript.",
    devops_cloud: "DevOps & Cloud",
    devops_desc: "Deployment with Docker, AWS services and cloud process automation.",
    db_optimization: "Database Optimization",
    db_desc: "Optimized queries, advanced indexing and normalization in SQL Server and MySQL.",
    technical_skills: "Technical Skills",
    education: "Education",
    degree: "Computer Science Engineering",
    experience: "Experience",
    present: "Present",
    exp_polesa: "Refactoring legacy PHP systems (CodeIgniter 3) to Laravel 12, achieving 70% more maintainable and reliable code. SQL Server query optimization by over 85%. Development of new functionalities for national and international pole manufacturing.",
    exp_cactus: "Admin panel implementation with Filament 3.0, reducing order management time by 70%. Unit test design with PEST and documentation achieving 90% code coverage.",
    exp_enlace: "REST API creation using microservicios for SaaS billing automation, reducing errors by 45%. AWS Lambda implementation with Python, improving code reliability by 80%.",
    exp_homeosystems: "System development using Laravel, Livewire, Bootstrap and AWS. Openpay API integration, optimizing the purchase process by 75%. Administrative module development for patient, medication, course and blog CRUD.",
    exp_softernium: "User dashboard design and role management system, handling profiles for over 100 users. Automatic PDF and CSV report generation, reducing generation time by over 50%.",
    exp_cloud: "Development on various projects for one of their products. Frontend development with HTML, CSS, JavaScript, jQuery, AJAX calls and databases like MySQL and SQL Server, as well as Backend (PHP) to extract data from a VoIP and display it on a real-time Dashboard.",
    exp_robotica: "Assistance in programming and software development tasks.",
    select_category: "Select category",
    project_polesa: "Polesa - Manufacturing System",
    project_cactus: "Cactus Feliz - Admin Panel",
    project_enlace: "Enlace Fiscal - Billing API",
    project_homeosystems: "Homeosystems - Health System",
    project_globalwifi: "Global WiFi - Dashboards",
    contact_form: "Contact Form",
    full_name: "Full name",
    email_address: "Email address",
    your_message: "Your Message",
    send_message: "Send Message"
  }
};

// ==========================================
// LANGUAGE
// ==========================================

const STORAGE_KEY = 'portfolio-lang';
let currentLang = localStorage.getItem(STORAGE_KEY) || 'es';

function applyTranslations(lang) {
  document.querySelectorAll('[data-lang-key]').forEach(function (el) {
    var key = el.getAttribute('data-lang-key');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-lang-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-lang-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-option').forEach(function (opt) {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
}

var langToggle = document.querySelector('[data-lang-toggle]');
if (langToggle) {
  langToggle.addEventListener('click', function () {
    applyTranslations(currentLang === 'es' ? 'en' : 'es');
  });
}

applyTranslations(currentLang);

// ==========================================
// ELEMENT TOGGLE
// ==========================================

function elementToggleFunc(elem) { elem.classList.toggle("active"); }

// ==========================================
// SIDEBAR
// ==========================================

var sidebar = document.querySelector("[data-sidebar]");
var sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// ==========================================
// CUSTOM SELECT
// ==========================================

var select = document.querySelector("[data-select]");
var selectItems = document.querySelectorAll("[data-select-item]");
var selectValue = document.querySelector("[data-selecct-value]");
var filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

for (var i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    var selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// ==========================================
// FILTER
// ==========================================

var filterItems = document.querySelectorAll("[data-filter-item]");

function filterFunc(selectedValue) {
  for (var i = 0; i < filterItems.length; i++) {
    var category = filterItems[i].dataset.category;
    if (selectedValue === "all" || category.indexOf(selectedValue) !== -1) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

var lastClickedBtn = filterBtn[0];

for (var i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    var selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// ==========================================
// CONTACT FORM
// ==========================================

var form = document.querySelector("[data-form]");
var formInputs = document.querySelectorAll("[data-form-input]");
var formBtn = document.querySelector("[data-form-btn]");

for (var i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form && formBtn) {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    }
  });
}

// ==========================================
// PAGE NAVIGATION
// ==========================================

var navigationLinks = document.querySelectorAll("[data-nav-link]");
var pages = document.querySelectorAll("[data-page]");

var langKeyToPage = {
  about_me: "sobre mi",
  resume: "resume",
  portfolio: "portfolio",
  contact: "contacto"
};

for (var i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    var pageKey = this.getAttribute("data-lang-key");
    var targetPage = langKeyToPage[pageKey] || this.innerHTML.toLowerCase();

    for (var j = 0; j < pages.length; j++) {
      if (pages[j].dataset.page === targetPage) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}
