document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timeline = document.querySelector('.timeline');
    const showMoreBtn = document.getElementById('show-more-btn');


    const itemsToShow = 5;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {

            filterButtons.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');

            const filter = button.getAttribute('data-filter');


            if (filter === 'all') {
                timeline.classList.remove('filtered');
                showMoreBtn.style.display = 'block';
            } else {
                timeline.classList.add('filtered');
                showMoreBtn.style.display = 'none';
            }

            timelineItems.forEach((item, index) => {
                item.style.display = 'none';

                if (filter === 'all') {
                    if (index < itemsToShow) {
                        item.style.display = 'flex';
                    }
                } else {
                    if (item.classList.contains(`${filter}-item`)) {
                        item.style.display = 'flex';
                    }
                }
            });

            resetTimelinePositions();
        });
    });

    showMoreBtn.addEventListener('click', () => {
        timelineItems.forEach(item => {
            item.style.display = 'flex';
        });
        showMoreBtn.style.display = 'none';

        resetTimelinePositions();
    });

    function resetTimelinePositions() {
        const visibleItems = Array.from(document.querySelectorAll('.timeline-item')).filter(item => item.style.display !== 'none');

        visibleItems.forEach(item => {
            item.classList.remove('left', 'right');
        });

        if (!timeline.classList.contains('filtered')) {
            visibleItems.forEach((item, index) => {
                if (index % 2 === 0) {
                    item.classList.add('left');
                } else {
                    item.classList.add('right');
                }
            });
        } else {
            visibleItems.forEach(item => {
                item.classList.add('left');
            });
        }
    }

    function initializeTimeline() {
        const filter = document.querySelector('.filter-buttons button.active').getAttribute('data-filter');

        timelineItems.forEach((item, index) => {
            item.style.display = 'none';

            if (filter === 'all') {
                if (index < itemsToShow) {
                    item.style.display = 'flex';
                }
            } else {
                if (item.classList.contains(`${filter}-item`)) {
                    item.style.display = 'flex';
                }
            }
        });

        if (filter === 'all') {
            showMoreBtn.style.display = 'block';
        } else {
            showMoreBtn.style.display = 'none';
        }

        resetTimelinePositions();
    }

    initializeTimeline();
});
