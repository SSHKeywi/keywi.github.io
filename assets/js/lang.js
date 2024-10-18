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
      greeting: "Hello&#128075;<br>I'm <span class=\"name\">Keywi</span>,",
      jobTitle: "An",
      jobs: {
        pentester: "Apprentice Pentester",
        infrastructureAdmin: "Secure Infrastructure Administrator",
        photographer: "Photographer",
      },
      home: {
        paragraph:
          "Welcome to my portfolio! I am passionate about cybersecurity, infrastructure administration, and photography. Explore my skills and projects to learn more about my work.",
        hireMe: "Hire Me",
      },
      skills: {
        heading: "Skills",
        softskills: "Soft Skills",
        software: "Software",
        languages: "Languages",
        problemSolving: {
          name: "Problem Solving",
          description:
            "Ability to identify, analyze, and solve complex problems effectively and efficiently.",
          description2:
            "Experience in troubleshooting technical issues and implementing solutions to improve performance.",
        },
        communication: {
          name: "Communication",
          description:
            "Strong communication skills to convey information clearly and effectively to diverse audiences.",
          description2:
            "Experience in presenting technical concepts, documenting processes, and collaborating with team members.",
        },
        teamwork: {
          name: "Teamwork",
          description:
            "Collaborative approach to work effectively with team members and achieve common goals.",
          description2:
            "Experience in coordinating tasks, sharing knowledge, and supporting team success.",
        },
        adaptability: {
          name: "Adaptability",
          description:
            "Ability to adapt to new situations, technologies, and environments quickly and effectively.",
          description2:
            "Experience in learning new skills, adjusting to changes, and overcoming challenges.",
        },
        leadership: {
          name: "Leadership",
          description:
            "Leadership qualities to inspire, motivate, and guide team members to achieve objectives.",
          description2:
            "Experience in decision-making, problem-solving, and mentoring team members.",
        },
        creativity: {
          name: "Creativity",
          description:
            "Creative thinking to generate innovative ideas, solutions, and approaches to challenges.",
          description2:
            "Experience in designing projects, developing strategies, and exploring new opportunities.",
        },
        wireshark: {
          name: "Wireshark",
          description:
            "Wireshark is a network protocol analyzer used to capture and interactively browse the traffic running on a computer network.",
          description2:
            "It's widely used for network troubleshooting, analysis, software and protocol development, and education.",
        },
        aircrackng: {
          name: "Aircrack-ng",
          description:
            "Aircrack-ng is a suite of tools for auditing wireless networks, including monitoring, attacking, testing, and cracking Wi-Fi security.",
          description2:
            "It's used by security professionals to assess the security of wireless networks.",
        },
        metasploit: {
          name: "Metasploit",
          description:
            "Metasploit Framework is a penetration testing platform that enables you to find, exploit, and validate vulnerabilities.",
          description2:
            "It's widely used to develop and execute exploit code against remote target machines.",
        },
        nmap: {
          name: "Nmap",
          description:
            "Nmap (Network Mapper) is a security scanner used to discover hosts and services on a computer network by sending packets and analyzing the responses.",
          description2:
            "It's commonly used for network inventory, managing service upgrade schedules, and monitoring host or service uptime.",
        },
        crowdstrike: {
          name: "CrowdStrike",
          description:
            "CrowdStrike is a cybersecurity technology company providing endpoint security, threat intelligence, and cyberattack response services.",
          description2:
            "Their flagship product, Falcon, offers cloud-based protection against various cyber threats.",
        },
        dirbuster: {
          name: "DirBuster",
          description:
            "DirBuster is a multi-threaded Java application designed to brute force directories and files names on web/application servers.",
          description2:
            "It's used to find hidden pages and directories that are not linked on the website.",
        },
        burpsuite: {
          name: "Burp Suite",
          description:
            "Burp Suite is a graphical tool for testing Web application security. It is used to intercept, inspect, and modify traffic between your browser and the target application.",
          description2:
            "It includes tools for mapping and analyzing an application's attack surface and finding and exploiting vulnerabilities.",
        },
        servicenow: {
          name: "ServiceNow",
          description:
            "ServiceNow is a cloud-based platform providing software as a service (SaaS) for technical management support, including IT service management (ITSM) and IT operations management (ITOM).",
          description2:
            "It helps organizations manage digital workflows for enterprise operations.",
        },
        python: {
          name: "Python",
          description:
            "Python is a high-level programming language known for its simplicity, readability, and versatility. It's widely used for web development, data analysis, and automation.",
          description2:
            "It's popular for its extensive libraries, frameworks, and community support, often used for machine learning, artificial intelligence, and scientific computing.",
        },
        javascript: {
          name: "JavaScript",
          description:
            "JavaScript is a versatile programming language commonly used in web development to create interactive effects within web browsers.",
          description2:
            "It allows developers to implement complex features on web pages, including dynamic content updates, animations, and user interactions.",
        },
        mysql: {
          name: "MySQL",
          description:
            "MySQL is an open-source relational database management system based on SQL (Structured Query Language).",
          description2:
            "It's widely used for storing, retrieving, and managing data in various applications, especially web applications.",
        },
        bash: {
          name: "Bash",
          description:
            "Bash (Bourne Again SHell) is a Unix shell and command language used as the default login shell on most Linux distributions.",
          description2:
            "Mastery of Bash scripting allows for task automation, system administration, and efficient command-line operations.",
        },
        php: {
          name: "PHP",
          description:
            "PHP is a widely-used general-purpose scripting language especially suited for web development and can be embedded into HTML.",
          description2:
            "It's commonly used to create dynamic web pages, server-side applications, and content management systems.",
        },
        languagesList: {
          english: {
            name: "English",
            description:
              "Proficiency in the English language, enabling effective communication in international environments and comprehension of technical documentation.",
            description2:
              "Skills in reading, writing, speaking, and listening at a professional level.",
          },
          french: {
            name: "French",
            description:
              "Native language, complete mastery of French for written and oral communication.",
            description2:
              "Skills in writing, presenting, and professional interaction in Francophone environments.",
          },
          portuguese: {
            name: "Portuguese",
            description:
              "Proficiency in Portuguese language for basic communication.",
            description2: "",
          },
        },
      },
      achievements: {
        eggupdate: {
          title: "Achievement Made!",
          description: "You make an update!",
          btn: "Update",
        },
      },
    },
  },
  fr: {
    translation: {
      title: "Portfolio de Keywi",
      logo: "Keywi",
      nav: {
        home: "Accueil",
        skills: "Compétences",
        education: "Formation",
        experience: "Expérience",
        contact: "Contact",
      },
      greeting:
        "Salut&#128075;<br>Je suis <span class=\"name\">Keywi</span>",
      jobTitle: "Un",
      jobs: {
        pentester: "Apprenti Pentester",
        infrastructureAdmin: "Administrateur d'Infrastructure Sécurisée",
        photographer: "Photographe",
      },
      home: {
        paragraph:
          "Bienvenue sur mon portfolio ! Je suis passionné par la cybersécurité, l'administration d'infrastructures et la photographie. Explorez mes compétences et mes projets pour en savoir plus sur mon travail.",
        hireMe: "Engagez-moi",
      },
      skills: {
        heading: "Compétences",
        softskills: "Soft Skills",
        software: "Logiciels",
        languages: "Langues",
        problemSolving: {
          name: "Résolution de Problèmes",
          description:
            "Capacité à identifier, analyser et résoudre efficacement et efficacement des problèmes complexes.",
          description2:
            "Expérience dans le dépannage des problèmes techniques et la mise en œuvre de solutions pour améliorer les performances.",
        },
        communication: {
          name: "Communication",
          description:
            "Solides compétences en communication pour transmettre des informations clairement et efficacement à des publics divers.",
          description2:
            "Expérience dans la présentation de concepts techniques, la documentation de processus et la collaboration avec les membres de l'équipe.",
        },
        teamwork: {
          name: "Travail d'Équipe",
          description:
            "Approche collaborative pour travailler efficacement avec les membres de l'équipe et atteindre des objectifs communs.",
          description2:
            "Expérience dans la coordination des tâches, le partage des connaissances et le soutien à la réussite de l'équipe.",
        },
        adaptability: {
          name: "Adaptabilité",
          description:
            "Capacité à s'adapter rapidement et efficacement à de nouvelles situations, technologies et environnements.",
          description2:
            "Expérience dans l'apprentissage de nouvelles compétences, l'adaptation aux changements et le dépassement des défis.",
        },
        leadership: {
          name: "Leadership",
          description:
            "Qualités de leadership pour inspirer, motiver et guider les membres de l'équipe à atteindre des objectifs.",
          description2:
            "Expérience dans la prise de décision, la résolution de problèmes et le mentorat des membres de l'équipe.",
        },
        creativity: {
          name: "Créativité",
          description:
            "Pensée créative pour générer des idées, des solutions et des approches innovantes aux défis.",
          description2:
            "Expérience dans la conception de projets, le développement de stratégies et l'exploration de nouvelles opportunités.",
        },
        wireshark: {
          name: "Wireshark",
          description:
            "Wireshark est un analyseur de protocole réseau utilisé pour capturer et parcourir interactivement le trafic circulant sur un réseau informatique.",
          description2:
            "Il est largement utilisé pour le dépannage réseau, l'analyse, le développement de logiciels et de protocoles, et l'éducation.",
        },
        aircrackng: {
          name: "Aircrack-ng",
          description:
            "Aircrack-ng est une suite d'outils pour auditer les réseaux sans fil, y compris la surveillance, l'attaque, le test et le craquage de la sécurité Wi-Fi.",
          description2:
            "Il est utilisé par les professionnels de la sécurité pour évaluer la sécurité des réseaux sans fil.",
        },
        metasploit: {
          name: "Metasploit",
          description:
            "Le Framework Metasploit est une plateforme de test d'intrusion qui vous permet de trouver, exploiter et valider des vulnérabilités.",
          description2:
            "Il est largement utilisé pour développer et exécuter du code d'exploitation contre des machines cibles distantes.",
        },
        nmap: {
          name: "Nmap",
          description:
            "Nmap (Network Mapper) est un scanner de sécurité utilisé pour découvrir des hôtes et des services sur un réseau informatique en envoyant des paquets et en analysant les réponses.",
          description2:
            "Il est couramment utilisé pour l'inventaire réseau, la gestion des mises à jour des services et la surveillance de la disponibilité des hôtes ou des services.",
        },
        crowdstrike: {
          name: "CrowdStrike",
          description:
            "CrowdStrike est une entreprise de technologie de cybersécurité fournissant une sécurité des terminaux, du renseignement sur les menaces et des services de réponse aux cyberattaques.",
          description2:
            "Leur produit phare, Falcon, offre une protection basée sur le cloud contre diverses cybermenaces.",
        },
        dirbuster: {
          name: "DirBuster",
          description:
            "DirBuster est une application Java multi-thread conçue pour forcer brutalement les noms de répertoires et de fichiers sur les serveurs web/applications.",
          description2:
            "Il est utilisé pour trouver des pages et des répertoires cachés qui ne sont pas liés sur le site web.",
        },
        burpsuite: {
          name: "Burp Suite",
          description:
            "Burp Suite est un outil graphique pour tester la sécurité des applications web. Il est utilisé pour intercepter, inspecter et modifier le trafic entre votre navigateur et l'application cible.",
          description2:
            "Il inclut des outils pour cartographier et analyser la surface d'attaque d'une application et trouver et exploiter des vulnérabilités.",
        },
        servicenow: {
          name: "ServiceNow",
          description:
            "ServiceNow est une plateforme cloud fournissant des logiciels en tant que service (SaaS) pour le support de la gestion technique, y compris la gestion des services informatiques (ITSM) et la gestion des opérations informatiques (ITOM).",
          description2:
            "Elle aide les organisations à gérer les flux de travail numériques pour les opérations d'entreprise.",
        },
        python: {
          name: "Python",
          description:
            "Python est un langage de programmation de haut niveau connu pour sa simplicité, sa lisibilité et sa polyvalence. Il est largement utilisé pour le développement web, l'analyse de données et l'automatisation.",
          description2:
            "Il est populaire pour ses vastes bibliothèques, frameworks et support communautaire, souvent utilisé pour l'apprentissage automatique, l'intelligence artificielle et le calcul scientifique.",
        },
        javascript: {
          name: "JavaScript",
          description:
            "JavaScript est un langage de programmation polyvalent couramment utilisé dans le développement web pour créer des effets interactifs dans les navigateurs web.",
          description2:
            "Il permet aux développeurs d'implémenter des fonctionnalités complexes sur les pages web, y compris les mises à jour dynamiques du contenu, les animations et les interactions avec les utilisateurs.",
        },
        mysql: {
          name: "MySQL",
          description:
            "MySQL est un système de gestion de base de données relationnelle open-source basé sur SQL (Structured Query Language).",
          description2:
            "Il est largement utilisé pour stocker, récupérer et gérer des données dans diverses applications, en particulier les applications web.",
        },
        bash: {
          name: "Bash",
          description:
            "Bash (Bourne Again SHell) est un shell Unix et un langage de commande utilisé comme shell de connexion par défaut sur la plupart des distributions Linux.",
          description2:
            "La maîtrise du scripting Bash permet l'automatisation des tâches, l'administration système et des opérations efficaces en ligne de commande.",
        },
        php: {
          name: "PHP",
          description:
            "PHP est un langage de script généraliste largement utilisé, particulièrement adapté au développement web et peut être intégré dans le HTML.",
          description2:
            "Il est couramment utilisé pour créer des pages web dynamiques, des applications côté serveur et des systèmes de gestion de contenu.",
        },
        languagesList: {
          english: {
            name: "Anglais",
            description:
              "Maîtrise de la langue anglaise, permettant une communication efficace dans des environnements internationaux et la compréhension de la documentation technique.",
            description2:
              "Compétences en lecture, écriture, expression orale et écoute à un niveau professionnel.",
          },
          french: {
            name: "Français",
            description:
              "Langue maternelle, maîtrise complète du français pour la communication écrite et orale.",
            description2:
              "Compétences en rédaction, présentation et interaction professionnelle dans des environnements francophones.",
          },
          portuguese: {
            name: "Portugais",
            description:
              "Compétence en langue portugaise pour une communication de base.",
            description2: "",
          },
        },
      },
      achievements: {
        eggupdate: {
          title: "Succès Obtenu!",
          description: "Mise à jour effectuée!",
          btn: "Mise à jour",
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
  