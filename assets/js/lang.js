// lang.js

// Définir les ressources de traduction avec les balises HTML incluses
const resources = {
    en: {
      translation: {
        title: "Keywi Portfolio",
        logo: "Keywi",
        nav: {
          home: "Home",
          skills: "Skills",
          education: "Education",
          experience: "Experience",
          contact: "Contact",
        },
        greeting: "Hello, I'm <span class=\"name\">Keywi</span>,",
        jobTitle: "An",
        jobs: {
          pentester: "Apprentice Pentester",
          infrastructureAdmin: "Secure Infrastructure Administrator",
          photographer: "Photographer",
        },
        home: {
          paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
          hireMe: "Hire Me",
        },
        skills: {
          heading: "Skills",
          softskills: "Softskills",
          software: "Software",
          languages: "Languages",
          communication: "Communication",
          teamwork: "Teamwork",
          leadership: "Leadership",
          creativity: "Creativity",
          wireshark: "Wireshark",
          nmap: "Nmap",
          burpsuite: {
            name: "BurpSuite",
            description:
              "BurpSuite is a web application security testing tool that identifies and exploits vulnerabilities in web applications.",
            description2:
              "I have used it on platforms like TryHackMe to further develop my pentesting skills and web application security knowledge.",
          },
          languages: {
            english: "English",
            englishLevel: "English B2",
            french: "French",
            frenchLevel: "French C2",
          },
        },
      },
    },
    fr: {
      translation: {
        title: "Portefeuille de Keywi",
        logo: "Keywi",
        nav: {
          home: "Accueil",
          skills: "Compétences",
          education: "Formation",
          experience: "Expérience",
          contact: "Contact",
        },
        greeting: "Salut, je suis <span class=\"name\">Keywi</span>",
        jobTitle: "Un",
        jobs: {
          pentester: "Apprenti Pentester",
          infrastructureAdmin: "Administrateur d'Infrastructure Sécurisée",
          photographer: "Photographe",
        },
        home: {
          paragraph: "Bonjour, je suis Keywi. Voici mon portfolio.",
          hireMe: "Engagez-moi",
        },
        skills: {
          heading: "Compétences",
          softskills: "Softskills",
          software: "Logiciels",
          languages: "Langues",
          communication: "Communication",
          teamwork: "Travail d'équipe",
          leadership: "Leadership",
          creativity: "Créativité",
          wireshark: "Wireshark",
          nmap: "Nmap",
          burpSuite: {
            name: "BurpSuite",
            description:
              "BurpSuite est un outil de test de sécurité des applications web qui permet d'identifier et d'exploiter des vulnérabilités dans les applications web. <br> Je l'ai utilisé sur des plateformes comme TryHackMe pour approfondir mes compétences en pentesting et en sécurité des applications web.",
          },
          languages: {
            english: "Anglais",
            englishLevel: "Anglais B2",
            french: "Français",
            frenchLevel: "Français C2",
          },
        },
      },
    },
  };
  
  // Initialiser i18next
  i18next
    .use(i18nextBrowserLanguageDetector) // Utiliser le détecteur de langue
    .init(
      {
        resources,
        fallbackLng: "en",
        debug: false,
        interpolation: {
          escapeValue: false, // Nécessaire pour interpréter le HTML
        },
      },
      function (err, t) {
        if (err) return console.error(err);
        // Initialiser la liaison avec jQuery
        jqueryI18next.init(i18next, $, {
          useOptionsAttr: true,
        });
        // Traduire le contenu
        $("body").localize();
  
        // Traduction avec HTML
        $("h1[data-i18n='greeting']").html(i18next.t("greeting"));
      }
    );
  
  // Gestion des boutons de langue
  $(document).ready(function () {
    $("#en-btn").on("click", function () {
      i18next.changeLanguage("en", (err, t) => {
        if (err) return console.error("Erreur lors du changement de langue", err);
        $("body").localize();
        $("h1[data-i18n='greeting']").html(i18next.t("greeting"));
      });
      // Mettre à jour le localStorage
      localStorage.setItem("language", "en");
    });
  
    $("#fr-btn").on("click", function () {
      i18next.changeLanguage("fr", (err, t) => {
        if (err) return console.error("Erreur lors du changement de langue", err);
        $("body").localize();
        $("h1[data-i18n='greeting']").html(i18next.t("greeting"));
      });
      // Mettre à jour le localStorage
      localStorage.setItem("language", "fr");
    });
  
    // Charger la langue préférée au chargement de la page
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      i18next.changeLanguage(savedLang, (err, t) => {
        if (err)
          return console.error("Erreur lors du chargement de la langue préférée", err);
        $("body").localize();
        $("h1[data-i18n='greeting']").html(i18next.t("greeting"));
      });
    }
  });
  