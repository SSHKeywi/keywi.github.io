// == /timeline.js ==

// 1. Données inline de la timeline
const timelineItems = [
    {
      type: "education",
      icon: "fas fa-school",
      logo: "assets/img/Timeline/SaintPierre.png",
      title: "Étudiant – Saint Pierre Institut",
      period: "Septembre 2015 – Juin 2016",
      location: "Brunoy, Île-de-France, France",
      description: "Lycée Hôtelier, Brunoy",
      details: null
    },
    {
      type: "experience",
      icon: "fas fa-briefcase",
      logo: "assets/img/Timeline/iad.png",
      title: "Entrepreneuriat – Agent Commercial en Immobilier chez IAD",
      period: "Novembre 2017 – Septembre 2018",
      location: null,
      description: null,
      details: [
        "Responsable de la vente de biens immobiliers pour particuliers et entreprises",
        "Recherche de propriétés à vendre et préparation de propositions personnalisées pour les clients",
        "Négociation des termes de vente et conclusion des transactions",
        "Gestion des relations clients : entretien des relations avec les clients potentiels et actuels",
        "Identification des opportunités de vente et collaboration avec d'autres agents",
        "Formation continue : veille sur les tendances et réglementations du marché immobilier"
      ]
    },
    {
      type: "education",
      icon: "fas fa-school",
      logo: "assets/img/Timeline/logoMLS.png",
      title: "Étudiant – Micro Lycée de Sénart",
      period: "2018 – 2020",
      location: "Lieusaint, Île-de-France, France",
      description: "Lycée Général et Technologique, Lieusaint",
      details: null
    },
    {
      type: "certification",
      icon: "fas fa-certificate",
      logo: "assets/img/Timeline/ministre.png",
      title: "Baccalauréat Sciences Économiques et Sociales",
      period: "Août 2020",
      location: null,
      description: "Ministère de l'Éducation Nationale",
      details: null
    },
    {
      type: "experience",
      icon: "fas fa-briefcase",
      logo: "assets/img/Timeline/LH.png",
      title: "Entrepreneuriat – LH Digicom",
      period: "Novembre 2019 – Septembre 2022",
      location: null,
      description: null,
      details: [
        "Développement et maintenance des services web, gestion de projets sous WordPress",
        "Création graphique : conception de visuels répondant aux besoins spécifiques des clients",
        "Supervision des opérations technologiques pour garantir la qualité des prestations",
        "Participation stratégique au développement des services et à la fidélisation des clients",
        "Gestion de projet autonome, coordination avec les différents acteurs"
      ]
    },
    {
      type: "education",
      icon: "fas fa-school",
      logo: "assets/img/Timeline/esiea.png",
      title: "Étudiant – INTECH/ESIEA École d'Ingénieur·e·s d'un Numérique Utile",
      period: "Septembre 2021 – Juin 2024",
      location: "Ivry-sur-Seine, Île-de-France, France",
      description: "Programme Expert Architecture Cloud, DevSecOps & Cybersécurité",
      details: null
    },
    {
      type: "project",
      icon: "fas fa-project-diagram",
      logo: "assets/img/Timeline/YR.png",
      title: "Chef de projet – Your Life... but",
      period: "Septembre 2021 – Février 2022",
      location: null,
      description: "Création d’un jeu interactif ‘Your Life... but’ alliant gameplay immersif et apprentissage, décisions stratégiques et conseils concrets pour surmonter les défis de la vie réelle.",
      details: null
    },
    {
      type: "engagement",
      icon: "fas fa-handshake",
      logo: "assets/img/Timeline/REC.png",
      title: "Vice-Président – Radio ESIEA Club",
      period: "Mars 2022 – Mars 2024",
      location: null,
      description: "Bénévole, responsable de la programmation et de la production des émissions, organisation d'événements et promotion de la radio.",
      details: null
    },
    {
      type: "engagement",
      icon: "fas fa-handshake",
      logo: "assets/img/Timeline/bds bear.png",
      title: "Responsable Événements – Association Sportive de l'ESIEA Paris",
      period: "Mars 2022 – Mars 2023",
      location: null,
      description: "Organisation d’activités sportives et compétitions, promotion de la pratique sportive et renforcement de l’esprit d’équipe.",
      details: null
    },
    {
      type: "project",
      icon: "fas fa-project-diagram",
      logo: "assets/img/Timeline/pogo.png",
      title: "Chef de projet – Pogo",
      period: "Mars 2022 – Juin 2022",
      location: null,
      description: "Site e-commerce vêtements avec HTML, JavaScript & MariaDB offrant gestion simplifiée des articles et utilisateurs et navigation optimale pour les clients.",
      details: null
    },
    {
      type: "experience",
      icon: "fas fa-briefcase",
      logo: "assets/img/Timeline/esiea_entreprise.jpg",
      title: "Vidéaste, Réalisateur et Monteur Audiovisuel – Groupe ESIEA",
      period: "Août 2022 – Août 2023",
      location: null,
      description: null,
      details: [
        "Réalisation de vidéos et photos conformes aux objectifs de communication",
        "Création de contenus visuels avec Premiere Pro, Photoshop, Illustrator, After Effects",
        "Contribution au design graphique pour renforcer l'impact",
        "Gestion des productions : planification et suivi",
        "Développement de compétences techniques et créatives en audiovisuel"
      ]
    },
    {
      type: "project",
      icon: "fas fa-project-diagram",
      logo: "assets/img/Timeline/Exsilum.png",
      title: "Chef de projet – Exsilum",
      period: "Septembre 2022 – Février 2023",
      location: null,
      description: "Automatisation du durcissement de Debian 11 avec Ansible (CIS, ANSSI), interface web d’administration et journalisation. Premier au Techday (systèmes, réseaux et sécurité).",
      details: null
    },
    {
      type: "engagement",
      icon: "fas fa-handshake",
      logo: "assets/img/Timeline/bde sch.png",
      title: "Responsable Communications – BDE Schtroumph (ESIEA Paris)",
      period: "Février 2023 – Février 2024",
      location: null,
      description: "Supervision de la création de contenus, gestion des réseaux sociaux et promotion des événements du BDE.",
      details: null
    },
    {
      type: "engagement",
      icon: "fas fa-handshake",
      logo: "assets/img/Timeline/hzv.png",
      title: "Photographe – HZV (hackerzvoice)",
      period: "Février 2023 – Février 2024",
      location: null,
      description: "Captation photo lors du HACK2023 et HACK2024, promotion des activités de la communauté.",
      details: null
    },
    {
      type: "project",
      icon: "fas fa-project-diagram",
      logo: "assets/img/Timeline/CHARTE_FANOS_LOGO-01.png",
      title: "Chef de projet – Fanos",
      period: "Mars 2023 – Juillet 2023",
      location: null,
      description: "Mise en place d’un serveur de supervision proactive du réseau pédagogique (SNMP, Prometheus, Grafana, InfluxDB, Alertmanager).",
      details: null
    },
    {
      type: "certification",
      icon: "fas fa-certificate",
      logo: "assets/img/Timeline/cisco.png",
      title: "[CCNAv7] Introduction to Networks",
      period: "Avril 2023",
      location: null,
      description: "Cisco Networking Academy",
      details: null
    },
    {
      type: "experience",
      icon: "fas fa-briefcase",
      logo: "assets/img/Timeline/logoSGG2016.jpg",
      title: "Réponse aux Incidents L3 – Saint-Gobain (Alternance)",
      period: "Août 2023 – Août 2024",
      location: null,
      description: null,
      details: [
        "Analyse des fraudes et cas de phishing",
        "Audit des règles de détection MITRE ATT&CK",
        "Chefferie de projet pour documentation des règles (équipe Inde)",
        "Réalisation de scripts d’automatisation",
        "Création d’un tableau de bord web (Flask, Python) pour KPIs"
      ]
    },
    {
      type: "engagement",
      icon: "fas fa-handshake",
      logo: "assets/img/Timeline/esiea_entreprise.jpg",
      title: "Représentant des étudiants du programme experts",
      period: "Décembre 2023 – Décembre 2025",
      location: null,
      description: "Élu au conseil d'administration de l'école, droit de vote sur les décisions.",
      details: null
    },
    {
      type: "certification",
      icon: "fas fa-certificate",
      logo: "assets/img/Timeline/cisco.png",
      title: "[CCNAv7] Switching, Routing, and Wireless Essentials",
      period: "Juillet 2024",
      location: null,
      description: "Cisco Networking Academy",
      details: null
    },
    {
      type: "certification",
      icon: "fas fa-certificate",
      logo: "assets/img/Timeline/ministre.png",
      title: "[RNCP-6] Administrateur d'infrastructures sécurisées",
      period: "Août 2024",
      location: null,
      description: "Ministère du Travail",
      details: null
    },
    {
      type: "certification",
      icon: "fas fa-certificate",
      logo: "assets/img/Timeline/cisco.png",
      title: "[CCNAv7] Enterprise Networking, Security, and Automation",
      period: "Octobre 2024",
      location: null,
      description: "Cisco Networking Academy",
      details: null
    },
    {
    type: "education",
    icon: "fas fa-school",
    logo: "assets/img/Timeline/ecole2600.png",
    title: "Étudiant – École 2600",
    period: "Septembre 2024 – Juin 2027",
    location: "Montigny-le-Bretonneux, Île-de-France, France",
    description: "École de la Cybersécurité",
    details: null
    }
  ];
  
  // 2. Fonction pour parser la date de début
function parseStartDate(period) {
    const start = period.split(/–|-/)[0].trim();
    const fullMatch = start.match(/^([A-Za-zÀ-ÖØ-öø-ÿ]+)\s+(\d{4})$/);
    if (fullMatch) {
      const moisFr = fullMatch[1], an = parseInt(fullMatch[2],10);
      const months = {
        Janvier:1, Février:2, Mars:3, Avril:4,
        Mai:5, Juin:6, Juillet:7, Août:8,
        Septembre:9, Octobre:10, Novembre:11, Décembre:12
      };
      return new Date(an, (months[moisFr]||1)-1,1).getTime();
    }
    const yearMatch = start.match(/(\d{4})/);
    if (yearMatch) return new Date(parseInt(yearMatch[1],10),0,1).getTime();
    return 0;
  }
  
  // 3. Tri du plus récent au plus ancien
  timelineItems.sort((a,b) => parseStartDate(b.period) - parseStartDate(a.period));
  
  // 4. Rendu et filtres
  function renderTimeline() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = '';
    timelineItems.forEach((item,i) => {
      const el = document.createElement('div');
      el.classList.add('timeline-item', item.type+'-item');
      const icon = document.createElement('div');
      icon.classList.add('timeline-icon', item.type+'-icon');
      icon.innerHTML = `<i class="${item.icon}"></i>`;
      el.appendChild(icon);
      const content = document.createElement('div');
      content.classList.add('timeline-content');
      let html = `
        <div class="institution-logo">
          <img src="${item.logo}" alt="${item.title}">
        </div>
        <div class="${item.type}-details">
          <h4>${item.title}</h4>
          <span>${item.period}</span>
      `;
      if (item.location)    html += `<p>${item.location}</p>`;
      if (item.description) html += `<p>${item.description}</p>`;
      if (item.details) {
        html += '<ul>';
        item.details.forEach(d=> html+=`<li>${d}</li>`);
        html += '</ul>';
      }
      html += '</div>';
      content.innerHTML = html;
      el.appendChild(content);
      el.classList.add(i%2===0?'left':'right');
      container.appendChild(el);
    });
  }
  
  let showAll = false;
  function resetTimelinePositions() {
    const items = Array.from(document.querySelectorAll('.timeline-item'));
    const filter = document.querySelector('.filter-buttons button.active')?.dataset.filter || 'all';
    const limit = showAll? items.length : 5;
    items.forEach((item,idx) => {
      const show = filter==='all'? idx<limit : item.classList.contains(filter+'-item');
      item.style.display = show? 'flex':'none';
      item.classList.toggle('visible', show);
    });
    const btn = document.getElementById('show-more-btn');
    btn.style.display = (!showAll && filter==='all')? 'block':'none';
    const visible = items.filter(i=>i.style.display!=='none');
    visible.forEach((item,i)=>{
      item.classList.toggle('left', filter!=='all' || i%2===0);
      item.classList.toggle('right', filter==='all' && i%2===1);
    });
  }
  
  document.addEventListener('DOMContentLoaded',()=>{
    renderTimeline();
    resetTimelinePositions();
    document.querySelectorAll('.filter-buttons button').forEach(btn=>{
      btn.addEventListener('click',()=>{
        showAll=false;
        document.querySelectorAll('.filter-buttons button')
                .forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        resetTimelinePositions();
      });
    });
    document.getElementById('show-more-btn').addEventListener('click',()=>{
      showAll=true;
      resetTimelinePositions();
    });
  });