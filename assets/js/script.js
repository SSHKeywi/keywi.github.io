const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};

function openPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });
  
  items.forEach(item => {
      observer.observe(item);
  });
});


let lastScrollY = window.scrollY;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scroll vers le bas
        header.classList.add('hide');
    } else {
        // Scroll vers le haut
        header.classList.remove('hide');
    }
    lastScrollY = window.scrollY;
});

document.addEventListener('DOMContentLoaded', () => {
  const home = document.querySelector('.home');
  const img   = home.querySelector('.home-img');
  const name  = home.querySelector('.name');

  [img, name].forEach(el => {
    el.addEventListener('mouseenter', () => home.classList.add('hovered'));
    el.addEventListener('mouseleave', () => home.classList.remove('hovered'));
  });
});


