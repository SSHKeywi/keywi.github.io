// assets/js/script.js

// Fonction pour jouer un son
function playSound(src) {
    const sound = new Audio(src);
    sound.volume = 0.2; // Ajuster le volume si nécessaire
    sound.play().catch(function(error) {
        console.error("Erreur lors de la lecture du son :", error);
    });
}

// Fonction pour afficher l'achievement avec animation et son
function achievement(i18nTitleKey, i18nDescKey, imgtrophy = '<i class="fa-solid fa-trophy"></i>') {
    const achievementContainer = document.createElement('div');
    achievementContainer.id = 'achievement-container';
    achievementContainer.className = 'achievement-container hide-achievement';

    const achievementIcon = document.createElement('div');
    achievementIcon.className = 'achievement-icon';
    achievementIcon.innerHTML = imgtrophy; 

    const achievementText = document.createElement('div');
    achievementText.className = 'achievement-text';

    const achievementTitle = document.createElement('h3');
    achievementTitle.setAttribute('data-i18n', i18nTitleKey);
    achievementTitle.textContent = '';

    const achievementDesc = document.createElement('p');
    achievementDesc.setAttribute('data-i18n', i18nDescKey);
    achievementDesc.textContent = ''; 

    achievementText.appendChild(achievementTitle);
    achievementText.appendChild(achievementDesc);

    achievementContainer.appendChild(achievementIcon);
    achievementContainer.appendChild(achievementText);

    document.body.appendChild(achievementContainer);

    // Traduction
    if (typeof i18next !== 'undefined' && typeof $ !== 'undefined' && typeof jqueryI18next !== 'undefined') {
        $(achievementContainer).localize();
    }

    playSound('assets/sounds/achievement.mp3');

    setTimeout(() => {
        achievementContainer.classList.remove('hide-achievement');
        achievementContainer.classList.add('show-achievement');
    }, 100);

    setTimeout(() => {
        achievementContainer.classList.remove('show-achievement');
        achievementContainer.classList.add('hide-achievement');

        // Supprimer après l'animation de disparition
        setTimeout(() => {
            if (achievementContainer.parentNode) {
                achievementContainer.parentNode.removeChild(achievementContainer);
            }
        }, 500); 
    }, 5000); 
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation de i18next si disponible
    if (typeof i18next !== 'undefined') {
        i18next.init({
            resources,
            lng: 'en', // Langue par défaut
            fallbackLng: 'en',
            interpolation: {
                escapeValue: false,
            },
        }, function(err, t) {
            if (typeof jqueryI18next !== 'undefined') {
                jqueryI18next.init(i18next, $, { useOptionsAttr: true });
                $('body').localize();
            }
        });
    }

    // EGG UPDATE
    const eggupdate = document.getElementById('eggupdate');
    const btn = document.getElementById('btnegg');
    const winerrorSound = 'assets/sounds/winerror.mp3';

    if (eggupdate && btn) {
        btn.style.display = 'none';

        eggupdate.addEventListener('click', function() {
            btn.style.display = 'block';
        });

        btn.addEventListener('click', function() {
            eggupdate.src = 'assets/img/3rr0r-codes.gif';
            playSound(winerrorSound);
            setTimeout(function(){
                achievement("achievements.eggupdate.title", "achievements.eggupdate.description", '<p> :( </p>');
            }, 2000); // 2 secondes

            btn.style.display = 'none';
            eggupdate.style.pointerEvents = 'none';
        });
    }
});
