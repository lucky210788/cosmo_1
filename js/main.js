document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu-mob');
    let isMenuOpen = false;

        menuBtn.addEventListener('click', function(){
            toggleMenu();
        })

    function toggleMenu() {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        isMenuOpen = !isMenuOpen;
    }

    document.querySelectorAll(".for-scroll").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (isMenuOpen) {
                toggleMenu();
            }

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});

function createMarquee(text, container, speed = 100, repeatCount = 20) {
    container.innerHTML = '';

    const track = document.createElement('div');
    track.className = 'marquee-track';

    const words = text.split(' ');

    for (let i = 0; i < repeatCount; i++) {
        for (let word of words) {
            const span = document.createElement('span');
            span.className = 'marquee-word';
            span.textContent = word;
            track.appendChild(span);
        }
    }

    container.appendChild(track);

    requestAnimationFrame(() => {
        const totalWidth = track.scrollWidth;

        track.animate([
            { transform: 'translateX(0)' },
            { transform: `translateX(-${totalWidth / 2}px)` }
        ], {
            duration: totalWidth * speed / 50,
            iterations: Infinity,
            easing: 'linear'
        });
    });
}


document.querySelectorAll('.marquee-container').forEach(container => {
    const text = container.getAttribute('data-text');
    createMarquee(text, container);
});

window.addEventListener('resize', function(event){
    document.querySelectorAll('.marquee-container').forEach(container => {
        const text = container.getAttribute('data-text');
        createMarquee(text, container);
    });
});


