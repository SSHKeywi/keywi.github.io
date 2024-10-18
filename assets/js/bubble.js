document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble');
    const container = document.querySelector('.bubble-container');
    const switchModeButton = document.getElementById('switchModeButton');

    const bubbleData = [];
    let isChainActive = true; // Activer l'animation par défaut
    let maxPositions = 50;
    let isAnimatedColumns = false; // Mode par défaut

    // Groupes de bulles
    const groups = [
        {
            name: 'software',
            bubbles: [],
            leaderPositions: [],
            angle: 0,
            angularSpeed: 0.005,
            radius: 200,
            centerX: 0,
            centerY: 0,
        },
        {
            name: 'softskills',
            bubbles: [],
            leaderPositions: [],
            angle: (2 * Math.PI) / 4,
            angularSpeed: 0.005,
            radius: 200,
            centerX: 0,
            centerY: 0,
        },
        {
            name: 'programmes',
            bubbles: [],
            leaderPositions: [],
            angle: (4 * Math.PI) / 4,
            angularSpeed: 0.005,
            radius: 200,
            centerX: 0,
            centerY: 0,
        },
        {
            name: 'languages', // New group added
            bubbles: [],
            leaderPositions: [],
            angle: (6 * Math.PI) / 4,
            angularSpeed: 0.005,
            radius: 200,
            centerX: 0,
            centerY: 0,
        },
    ];

    // Fonction pour mettre à jour le centre du conteneur
    function updateContainerCenter() {
        const containerRect = container.getBoundingClientRect();
        groups.forEach((group) => {
            group.centerX = containerRect.width / 2;
            group.centerY = containerRect.height / 2;
        });
    }

    // Appeler la fonction au chargement initial
    updateContainerCenter();

    // Ajouter un écouteur pour mettre à jour le centre en cas de redimensionnement de la fenêtre
    window.addEventListener('resize', updateContainerCenter);

    // Attribuer les bulles aux groupes et initialiser
    bubbles.forEach((bubble) => {
        const groupName = bubble.getAttribute('data-group') || 'default';
        const group = groups.find((g) => g.name === groupName);

        if (!group) return;

        // Attribuer une taille fixe à toutes les bulles
        let scale = 1;
        bubble.style.transform = `scale(${scale})`;

        // Attribuer une couleur en fonction du groupe
        let hue, saturation, lightness;

        if (groupName === 'software') {
            hue = Math.random() * 40 + 220;
            saturation = Math.random() * 20 + 80;
            lightness = Math.random() * 20 + 40;
        } else if (groupName === 'softskills') {
            hue = Math.random() * 10 + 350;
            saturation = Math.random() * 20 + 80;
            lightness = Math.random() * 20 + 30;
        } else if (groupName === 'languages') {
            hue = Math.random() * 30 + 30;
            saturation = Math.random() * 20 + 80;
            lightness = Math.random() * 20 + 50;
        } else if (groupName === 'programmes') {
            // Assign green color for "programmes" group
            hue = Math.random() * 30 + 90; // Green hues around 90-120
            saturation = Math.random() * 20 + 80;
            lightness = Math.random() * 20 + 50;
        }

        bubble.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        // Obtenir les dimensions réelles de la bulle après la mise à l'échelle
        requestAnimationFrame(() => {
            const bubbleRect = bubble.getBoundingClientRect();
            const bubbleWidth = bubbleRect.width;
            const bubbleHeight = bubbleRect.height;

            // Initialiser les positions
            const data = {
                bubble,
                bubbleWidth,
                bubbleHeight,
                speedX: 0,
                speedY: 0,
                isDragging: false,
                isThrown: false,
                isDispersed: false,
                lastMouseX: 0,
                lastMouseY: 0,
                clickStartTime: 0,
                clickEndTime: 0,
                totalMovement: 0,
                chainIndex: group.bubbles.length,
                groupName,
                disableAITime: 0,
            };

            // Position initiale dispersée aléatoirement autour du centre
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * 100 + 50;
            data.posX = group.centerX + radius * Math.cos(angle) - bubbleWidth / 2;
            data.posY = group.centerY + radius * Math.sin(angle) - bubbleHeight / 2;
            bubble.style.left = `${data.posX}px`;
            bubble.style.top = `${data.posY}px`;

            bubbleData.push(data);
            group.bubbles.push(data);

            // Ajouter une référence au groupe dans les données de la bulle
            data.group = group;

            // Événements de souris
            bubble.addEventListener('mousedown', (e) => onMouseDown(e, data));
        });
    });

    // Écouteur pour le bouton de basculement
    switchModeButton.addEventListener('click', toggleMode);

    function toggleMode() {
        isAnimatedColumns = !isAnimatedColumns;

        if (isAnimatedColumns) {
            isChainActive = false;
            arrangeBubblesInColumns(true);
            switchModeButton.classList.add('active');
            switchModeButton.querySelector('.text').textContent = 'Afficher l\'animation';
        } else {
            arrangeBubblesInCircle();
            isChainActive = true;
            switchModeButton.classList.remove('active');
            switchModeButton.querySelector('.text').textContent = 'Afficher en colonnes';
        }
    }

    function arrangeBubblesInColumns(allowMovement) {
        const groupsData = {};
        bubbleData.forEach((data) => {
            if (!groupsData[data.groupName]) {
                groupsData[data.groupName] = [];
            }
            groupsData[data.groupName].push(data);
        });

        const groupNames = Object.keys(groupsData);

        const marginX = 20;
        const marginY = 20;
        const bubbleSize = 100; // Taille fixe des bulles (peut être ajustée)

        let currentY = marginY;

        groupNames.forEach((groupName) => {
            const groupBubbles = groupsData[groupName];
            
            // Calculer le nombre de colonnes en fonction de la largeur de l'écran
            const containerWidth = container.clientWidth;
            const maxColumns = Math.floor((containerWidth + marginX) / (bubbleSize + marginX));
            const columns = Math.min(maxColumns, groupBubbles.length);

            const rows = Math.ceil(groupBubbles.length / columns);
            
            // Calculer le décalage pour centrer les bulles
            const totalBubblesWidth = columns * (bubbleSize + marginX) - marginX;
            const startX = (containerWidth - totalBubblesWidth) / 2;

            for (let i = 0; i < groupBubbles.length; i++) {
                const data = groupBubbles[i];
                const column = i % columns;
                const row = Math.floor(i / columns);
                const posX = startX + column * (bubbleSize + marginX);
                const posY = currentY + row * (bubbleSize + marginY);

                data.targetX = posX;
                data.targetY = posY;

                if (!allowMovement) {
                    data.posX = posX;
                    data.posY = posY;
                    data.speedX = 0;
                    data.speedY = 0;
                    data.bubble.style.left = `${data.posX}px`;
                    data.bubble.style.top = `${data.posY}px`;
                } else {
                    data.speedX = (Math.random() * 2 - 1) * 0.5;
                    data.speedY = (Math.random() * 2 - 1) * 0.5;
                }
            }

            currentY += rows * (bubbleSize + marginY) + marginY;
        });

        container.style.height = `${currentY}px`;
    }

    function arrangeBubblesInCircle() {
        container.style.height = '80vh';
        bubbleData.forEach((data) => {
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * 100 + 50;
            data.posX = data.group.centerX + radius * Math.cos(angle) - data.bubbleWidth / 2;
            data.posY = data.group.centerY + radius * Math.sin(angle) - data.bubbleHeight / 2;
            data.bubble.style.left = `${data.posX}px`;
            data.bubble.style.top = `${data.posY}px`;
        });
    }

    function onMouseDown(e, data) {
        e.preventDefault();
        data.clickStartTime = Date.now();
        data.totalMovement = 0;
        data.isDragging = !isAnimatedColumns;
        data.lastMouseX = e.clientX;
        data.lastMouseY = e.clientY;

        window.addEventListener('mousemove', data.onMouseMove = (e) => onMouseMove(e, data));
        window.addEventListener('mouseup', data.onMouseUp = (e) => onMouseUp(e, data));
    }

    function onMouseMove(e, data) {
        if (data.isDragging) {
            const deltaX = e.clientX - data.lastMouseX;
            const deltaY = e.clientY - data.lastMouseY;
            data.totalMovement += Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            data.posX += deltaX;
            data.posY += deltaY;
            data.speedX = deltaX * 0.5;
            data.speedY = deltaY * 0.5;
            data.lastMouseX = e.clientX;
            data.lastMouseY = e.clientY;
        }
    }

    function onMouseUp(e, data) {
        data.isDragging = false;
        data.clickEndTime = Date.now();
        window.removeEventListener('mousemove', data.onMouseMove);
        window.removeEventListener('mouseup', data.onMouseUp);
        const clickDuration = data.clickEndTime - data.clickStartTime;

        if (data.totalMovement < 5 && clickDuration < 200) {
            const popupId = data.bubble.getAttribute('data-popup-id');
            openPopup(popupId);
            data.isThrown = false;
            data.disableAITime = 0;
        } else {
            if (!isAnimatedColumns) {
                data.isThrown = true;
                data.disableAITime = Date.now() + 2000;
            }
        }
    }

    // Boucle d'animation principale
    function animate() {
        if (isAnimatedColumns) {
            bubbleData.forEach((data) => {
                data.posX += (data.targetX - data.posX) * 0.1 + data.speedX;
                data.posY += (data.targetY - data.posY) * 0.1 + data.speedY;
                data.speedX *= 0.95;
                data.speedY *= 0.95;
                data.bubble.style.left = `${data.posX}px`;
                data.bubble.style.top = `${data.posY}px`;
            });
        } else {
            groups.forEach((group) => {
                if (isChainActive) {
                    const leader = group.bubbles[0];
                    group.angle += group.angularSpeed;
                    leader.posX = group.centerX + group.radius * Math.cos(group.angle) - leader.bubbleWidth / 2;
                    leader.posY = group.centerY + group.radius * Math.sin(group.angle) - leader.bubbleHeight / 2;
                    group.leaderPositions.unshift({ x: leader.posX, y: leader.posY });
                    if (group.leaderPositions.length > maxPositions) {
                        group.leaderPositions.pop();
                    }
                }

                for (let i = 0; i < group.bubbles.length; i++) {
                    const data = group.bubbles[i];

                    if (i === 0 && isChainActive) continue;

                    const positionIndex = (i * Math.floor(maxPositions / group.bubbles.length));
                    if (group.leaderPositions[positionIndex]) {
                        const targetX = group.leaderPositions[positionIndex].x;
                        const targetY = group.leaderPositions[positionIndex].y;
                        data.posX += (targetX - data.posX) * 0.05;
                        data.posY += (targetY - data.posY) * 0.05;
                    }
                    checkContainerCollision(data);
                }

                // Vérifier les collisions entre les bulles du même groupe
                handleBubbleCollisions(group.bubbles);
            });

            bubbleData.forEach((data) => {
                data.bubble.style.left = `${data.posX}px`;
                data.bubble.style.top = `${data.posY}px`;
            });
        }
        requestAnimationFrame(animate);
    }

    function checkContainerCollision(data) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        if (data.posX <= 0) {
            data.posX = 0;
            data.speedX *= -1;
        } else if (data.posX + data.bubbleWidth >= containerWidth) {
            data.posX = containerWidth - data.bubbleWidth;
            data.speedX *= -1;
        }
        if (data.posY <= 0) {
            data.posY = 0;
            data.speedY *= -1;
        } else if (data.posY + data.bubbleHeight >= containerHeight) {
            data.posY = containerHeight - data.bubbleHeight;
            data.speedY *= -1;
        }
    }

    // Gérer les collisions uniquement pour les bulles du même groupe
    function handleBubbleCollisions(groupBubbles) {
        for (let i = 0; i < groupBubbles.length; i++) {
            const dataA = groupBubbles[i];

            for (let j = i + 1; j < groupBubbles.length; j++) {
                const dataB = groupBubbles[j];

                const dx = dataB.posX - dataA.posX;
                const dy = dataB.posY - dataA.posY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = (dataA.bubbleWidth + dataB.bubbleWidth) / 2 - 5;

                if (distance < minDistance) {
                    const overlap = minDistance - distance;
                    const nx = dx / distance;
                    const ny = dy / distance;

                    const correctionX = nx * overlap / 2;
                    const correctionY = ny * overlap / 2;

                    dataA.posX -= correctionX;
                    dataA.posY -= correctionY;
                    dataB.posX += correctionX;
                    dataB.posY += correctionY;

                    const tempSpeedX = dataA.speedX;
                    const tempSpeedY = dataA.speedY;
                    dataA.speedX = dataB.speedX * 0.7;
                    dataA.speedY = dataB.speedY * 0.7;
                    dataB.speedX = tempSpeedX * 0.7;
                    dataB.speedY = tempSpeedY * 0.7;
                }
            }
        }
    }

    // Démarrer l'animation après un léger délai
    setTimeout(() => {
        animate();
    }, 100);

    // Ajouter un écouteur pour le redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        if (isAnimatedColumns) {
            arrangeBubblesInColumns(false);
        }
    });

    window.openPopup = function(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'block';
        }
    };

    window.closePopup = function(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'none';
        }
    };
});
