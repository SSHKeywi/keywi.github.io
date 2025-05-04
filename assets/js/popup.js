const popupsData = [
    {
      id: "problemSolving",
      img: "problem-solving.png",
      alt: "Problem Solving",
      name: "skills.problemSolving.name",
      description1: "skills.problemSolving.description",
      description2: "skills.problemSolving.description2",
      tags: ["#SoftSkill", "#ProblemSolving"]
    },
    {
      id: "communication",
      img: "communication.png",
      alt: "Communication",
      name: "skills.communication.name",
      description1: "skills.communication.description",
      description2: "skills.communication.description2",
      tags: ["#SoftSkill", "#Communication"]
    },
    {
      id: "teamwork",
      img: "teamwork.png",
      alt: "Teamwork",
      name: "skills.teamwork.name",
      description1: "skills.teamwork.description",
      description2: "skills.teamwork.description2",
      tags: ["#SoftSkill", "#Teamwork"]
    },
    {
      id: "adaptability",
      img: "adaptability.png",
      alt: "Adaptability",
      name: "skills.adaptability.name",
      description1: "skills.adaptability.description",
      description2: "skills.adaptability.description2",
      tags: ["#SoftSkill", "#Adaptability"]
    },
    {
      id: "wireshark",
      img: "wireshark.png",
      alt: "Wireshark",
      name: "skills.wireshark.name",
      description1: "skills.wireshark.description",
      description2: "skills.wireshark.description2",
      tags: ["#Software", "#Wireshark"]
    },
    {
      id: "aircrack-ng",
      img: "aircrack-ng.png",
      alt: "Aircrack-ng",
      name: "skills.aircrackng.name",
      description1: "skills.aircrackng.description",
      description2: "skills.aircrackng.description2",
      tags: ["#Software", "#Aircrack-ng"]
    },
    {
      id: "metasploit",
      img: "metasploit.png",
      alt: "Metasploit",
      name: "skills.metasploit.name",
      description1: "skills.metasploit.description",
      description2: "skills.metasploit.description2",
      tags: ["#Software", "#Metasploit"]
    },
    {
      id: "nmap",
      img: "nmap.png",
      alt: "Nmap",
      name: "skills.nmap.name",
      description1: "skills.nmap.description",
      description2: "skills.nmap.description2",
      tags: ["#Software", "#Nmap"]
    },
    
    {
        id: "crowdstrike",
        img: "crowdstrike.png",
        alt: "Crowdstrike",
        name: "skills.crowdstrike.name",
        description1: "skills.crowdstrike.description",
        description2: "skills.crowdstrike.description2",
        tags: ["#Software", "#CrowdStrike"],
        specialEgg: true,
        easterEgg: {
            trigger: "ClickButton",
            buttonId: "btnegg",
            buttonText: "achievements.eggupdate.btn",
            imgId: "eggupdate",
            sound: "assets/sounds/winerror.mp3",
            gif: "assets/img/3rr0r-codes.gif",
            title: "achievements.eggupdate.title",
            description: "achievements.eggupdate.description",
            trophy: "<p>:(</p>"
        }
        },
    {
      id: "dirbuster",
      img: "dirbuster.png",
      alt: "Dirbuster",
      name: "skills.dirbuster.name",
      description1: "skills.dirbuster.description",
      description2: "skills.dirbuster.description2",
      tags: ["#Software", "#DirBuster"]
    },
    {
      id: "burpsuite",
      img: "burpsuite.png",
      alt: "Burp Suite",
      name: "skills.burpsuite.name",
      description1: "skills.burpsuite.description",
      description2: "skills.burpsuite.description2",
      tags: ["#Software", "#BurpSuite"],
      specialEgg: true,
      easterEgg: {
          buttonId: "btnegg",
          buttonText: "achievements.eggupdate.btn",
          imgId: "eggupdate"
      }    
    },
    {
      id: "servicenow",
      img: "snow.png",
      alt: "ServiceNow",
      name: "skills.servicenow.name",
      description1: "skills.servicenow.description",
      description2: "skills.servicenow.description2",
      tags: ["#Software", "#ServiceNow"]
    },
    {
      id: "javascript",
      img: "javascript.png",
      alt: "JavaScript",
      name: "skills.javascript.name",
      description1: "skills.javascript.description",
      description2: "skills.javascript.description2",
      tags: ["#Language", "#JavaScript"]
    },
    {
      id: "mysql",
      img: "mysql.png",
      alt: "MySQL",
      name: "skills.mysql.name",
      description1: "skills.mysql.description",
      description2: "skills.mysql.description2",
      tags: ["#Database", "#MySQL"]
    },
    {
      id: "english",
      img: "english.png",
      alt: "English",
      name: "skills.languagesList.english.name",
      description1: "skills.languagesList.english.description",
      description2: "skills.languagesList.english.description2",
      tags: ["#Language", "#English"]
    },
    {
      id: "french",
      img: "french.png",
      alt: "French",
      name: "skills.languagesList.french.name",
      description1: "skills.languagesList.french.description",
      description2: "skills.languagesList.french.description2",
      tags: ["#Language", "#French"]
    },
    {
      id: "bash",
      img: "bash.png",
      alt: "Bash",
      name: "skills.bash.name",
      description1: "skills.bash.description",
      description2: "skills.bash.description2",
      tags: ["#Language", "#Bash"]
    },
    {
      id: "php",
      img: "php.png",
      alt: "PHP",
      name: "skills.php.name",
      description1: "skills.php.description",
      description2: "skills.php.description2",
      tags: ["#Language", "#PHP"]
    },
    {
      id: "python",
      img: "python.png",
      alt: "Python",
      name: "skills.python.name",
      description1: "skills.python.description",
      description2: "skills.python.description2",
      tags: ["#Language", "#Python"]
    }
  ];

  function openPopup(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  function closePopup(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  function renderPopups() {
    const container = document.getElementById("popupContainer");
  
    popupsData.forEach(p => {
      container.innerHTML += `
        <div id="${p.id}Popup" class="popup" style="display:none;">
          <div class="popup-content">
            <span class="close" onclick="closePopup('${p.id}Popup')">&times;</span>
            <div class="popup-container">
              <div class="popup-image">
                ${p.specialEgg ? `<button id="${p.easterEgg.buttonId}" class="btnegg" data-i18n="${p.easterEgg.buttonText}">🐣 Update ?</button>` : ''}
                <img src="assets/img/${p.img}" alt="${p.alt}" class="popup-logo" ${p.specialEgg ? `id="${p.easterEgg.imgId}"` : ''}>

              </div>
              <div class="popup-text">
                <h2 data-i18n="${p.name}">${p.alt}</h2>
                <p data-i18n="${p.description1}"></p><br>
                <p data-i18n="${p.description2}"></p>
                <div class="lexique-btn">
                  ${p.tags.map(tag => `<a href="#">${tag}</a>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderPopups();
  
    popupsData.forEach(p => {
      if (!p.specialEgg || !p.easterEgg) return;
  
      const s = p.easterEgg;
      const img = document.getElementById(s.imgId);
      const btn = document.getElementById(s.buttonId);
  
      const triggerEgg = () => {
        if (img) img.src = s.gif;
        if (s.sound) playSound(s.sound);
        setTimeout(() => {
          achievement(s.title, s.description, s.trophy);
        }, 2000);
        if (img) img.style.pointerEvents = 'none';
        if (btn) btn.style.display = 'none';
      };
  
      switch (s.trigger) {
        case "clickImage":
          if (btn && img) {
            btn.style.display = 'none';
            img.addEventListener('click', () => {
              btn.style.display = 'block';
            });
            btn.addEventListener('click', triggerEgg);
          }
          break;
        
        case "ClickButton":
        if (btn) {
            btn.style.display = 'block';
            btn.addEventListener('click', triggerEgg);
        }
        break;
  
        case "doubleClickButton":
          if (btn) {
            btn.style.display = 'block';
            btn.addEventListener('dblclick', triggerEgg);
          }
          break;

        case "doubleClickButtonImage":
        if (btn && img) {
            btn.style.display = 'none';
            img.addEventListener('click', () => {
                btn.style.display = 'block';
            });
            btn.addEventListener('dblclick', triggerEgg);
            }
            break;
  
        case "clickImageDirect":
          if (img) {
            img.addEventListener('click', triggerEgg);
          }
          break;
  
        case "hoverAndClick":
          if (img && btn) {
            btn.style.display = 'none';
            img.addEventListener("mouseenter", () => {
              btn.style.display = 'block';
            });
            btn.addEventListener("click", triggerEgg);
          }
          break;
  
        default:
          console.warn(`Trigger "${s.trigger}" non reconnu pour ${p.id}`);
      }
    });
  });
  