





const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    burgerBtn.classList.toggle('active'); // добавляем класс для крестика
});




document.addEventListener("click", (e) => {
    const clickedInsideNav = navMenu.contains(e.target);
    const clickedBurger = burgerBtn.contains(e.target);

    if (!clickedInsideNav && !clickedBurger) {
        navMenu.classList.remove("open");
        burgerBtn.classList.remove("active");
    }
});
// Smooth scroll + close menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navMenu.classList.remove('open');
        burgerBtn.classList.remove('active');
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});



window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});





document.querySelectorAll('.home-link ').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


const swiper = document.querySelector('.mySwiper')
if(swiper){

    const swiper = new Swiper('.mySwiper', {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
}








const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2,
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});




document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        item.classList.toggle('open');

        // Закрыть другие
        document.querySelectorAll('.faq-item').forEach(other => {
            if (other !== item) other.classList.remove('open');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cookieNotice = document.getElementById('cookieNotice');
    const acceptBtn = document.getElementById('acceptCookies');

    if (!localStorage.getItem('cookieAccepted')) {
        cookieNotice.style.display = 'block';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieAccepted', 'true');
        cookieNotice.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("galleryModal");
    const modalImg = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDescription");
    const closeBtn = document.querySelector(".close-modal");

    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", () => {
            modalImg.src = item.dataset.img;
            modalTitle.textContent = item.dataset.title;
            modalDesc.textContent = item.dataset.description;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});