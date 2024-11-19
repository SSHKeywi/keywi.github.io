document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble');
    const container = document.querySelector('.bubble-container');
    const switchModeButton = document.getElementById('switchModeButton');

    const bubbleData = [];
    let isAnimatedColumns = false;

    const groups = [
        { name: 'software', bubbles: [], centerX: 0, centerY: 0 },
        { name: 'softskills', bubbles: [], centerX: 0, centerY: 0 },
        { name: 'programmes', bubbles: [], centerX: 0, centerY: 0 },
        { name: 'languages', bubbles: [], centerX: 0, centerY: 0 },
    ];

    function updateContainerCenter() {
        const containerRect = container.getBoundingClientRect();
        groups.forEach((group) => {
            group.centerX = containerRect.width / 2;
            group.centerY = containerRect.height / 2;
        });
    }

    updateContainerCenter();
    window.addEventListener('resize', updateContainerCenter);

    let bubblesInitialized = 0;

    bubbles.forEach((bubble) => {
        const groupName = bubble.getAttribute('data-group') || 'default';
        const group = groups.find((g) => g.name === groupName);

        if (!group) return;

        let scale = 1;
        bubble.style.transform = `scale(${scale})`;

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
            hue = Math.random() * 30 + 90;
            saturation = Math.random() * 20 + 80;
            lightness = Math.random() * 20 + 50;
        }

        bubble.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        requestAnimationFrame(() => {
            const bubbleRect = bubble.getBoundingClientRect();
            const bubbleWidth = bubbleRect.width;
            const bubbleHeight = bubbleRect.height;

            const data = {
                bubble,
                bubbleWidth,
                bubbleHeight,
                speedX: (Math.random() * 2 - 1) * 1,
                speedY: (Math.random() * 2 - 1) * 1,
                isDragging: false,
                lastMouseX: 0,
                lastMouseY: 0,
                clickStartTime: 0,
                clickEndTime: 0,
                totalMovement: 0,
                groupName,
                posX: 0,
                posY: 0,
            };

            bubbleData.push(data);
            group.bubbles.push(data);

            data.group = group;

            bubble.addEventListener('mousedown', (e) => onMouseDown(e, data));
            bubble.addEventListener('touchstart', (e) => onMouseDown(e, data), { passive: false });

            bubblesInitialized++;

            if (bubblesInitialized === bubbles.length) {
                arrangeBubblesInCircle(); // Positionner les bulles au chargement
            }
        });
    });

    switchModeButton.addEventListener('click', toggleMode);

    function toggleMode() {
        isAnimatedColumns = !isAnimatedColumns;

        if (isAnimatedColumns) {
            arrangeBubblesInColumns(true);
            switchModeButton.classList.add('active');
            switchModeButton.querySelector('.text').textContent = 'Afficher l\'animation';
        } else {
            clearBubbleTargets(); // Ne pas repositionner les bulles
            switchModeButton.classList.remove('active');
            switchModeButton.querySelector('.text').textContent = 'Afficher en colonnes';
        }
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
        const bubbleSize = 100;

        let currentY = marginY;

        groupNames.forEach((groupName) => {
            const groupBubbles = groupsData[groupName];

            const containerWidth = container.clientWidth;
            const maxColumns = Math.floor((containerWidth + marginX) / (bubbleSize + marginX));
            const columns = Math.min(maxColumns, groupBubbles.length);

            const rows = Math.ceil(groupBubbles.length / columns);

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
                    data.speedX = 0;
                    data.speedY = 0;
                }
            }

            currentY += rows * (bubbleSize + marginY) + marginY;
        });

        container.style.height = `${currentY}px`;
    }

    function clearBubbleTargets() {
        container.style.height = '80vh';
        bubbleData.forEach((data) => {
            data.targetX = null;
            data.targetY = null;
            // Les bulles conservent leur position actuelle
        });
    }

    function onMouseDown(e, data) {
        e.preventDefault();
        data.clickStartTime = Date.now();
        data.totalMovement = 0;
        data.isDragging = !isAnimatedColumns;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        data.lastMouseX = clientX;
        data.lastMouseY = clientY;

        window.addEventListener('mousemove', data.onMouseMove = (e) => onMouseMove(e, data));
        window.addEventListener('mouseup', data.onMouseUp = (e) => onMouseUp(e, data));
        window.addEventListener('touchmove', data.onMouseMove, { passive: false });
        window.addEventListener('touchend', data.onMouseUp);
    }

    function onMouseMove(e, data) {
        if (data.isDragging) {
            e.preventDefault();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            const deltaX = clientX - data.lastMouseX;
            const deltaY = clientY - data.lastMouseY;
            data.totalMovement += Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            data.posX += deltaX;
            data.posY += deltaY;
            data.speedX = deltaX * 0.5;
            data.speedY = deltaY * 0.5;
            data.lastMouseX = clientX;
            data.lastMouseY = clientY;
        }
    }

    function onMouseUp(e, data) {
        data.isDragging = false;
        data.clickEndTime = Date.now();

        window.removeEventListener('mousemove', data.onMouseMove);
        window.removeEventListener('mouseup', data.onMouseUp);
        window.removeEventListener('touchmove', data.onMouseMove);
        window.removeEventListener('touchend', data.onMouseUp);

        const clickDuration = data.clickEndTime - data.clickStartTime;

        if (data.totalMovement < 5 && clickDuration < 200) {
            const popupId = data.bubble.getAttribute('data-popup-id');
            openPopup(popupId);
        }
    }

    function animate() {
        if (isAnimatedColumns) {
            bubbleData.forEach((data) => {
                data.posX += ((data.targetX - data.posX) * 0.1) || 0;
                data.posY += ((data.targetY - data.posY) * 0.1) || 0;
                data.bubble.style.left = `${data.posX}px`;
                data.bubble.style.top = `${data.posY}px`;
            });
        } else {
            bubbleData.forEach((data) => {
                if (!data.isDragging) {
                    data.posX += data.speedX;
                    data.posY += data.speedY;
                    data.speedX *= 0.99;
                    data.speedY *= 0.99;
                }
                checkContainerCollision(data);
            });

            handleBubbleCollisions(bubbleData);

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

    function handleBubbleCollisions(bubbles) {
        for (let i = 0; i < bubbles.length; i++) {
            const dataA = bubbles[i];

            for (let j = i + 1; j < bubbles.length; j++) {
                const dataB = bubbles[j];

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
                    dataA.speedX = dataB.speedX;
                    dataA.speedY = dataB.speedY;
                    dataB.speedX = tempSpeedX;
                    dataB.speedY = tempSpeedY;
                }
            }
        }
    }

    animate();

    window.addEventListener('resize', () => {
        updateContainerCenter();
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
