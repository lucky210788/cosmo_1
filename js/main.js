document.addEventListener('DOMContentLoaded', function() {
    const navIcon = document.querySelector('.menu-icon');

    if (navIcon) {
        navIcon.addEventListener('click', function() {
            navIcon.classList.toggle('open');
            document.querySelector('body').classList.toggle('hidden');
        });
    }
});

document.addEventListener('scroll', function() {
    const scrollDown = document.querySelector('.scroll-down');
    const contentRight = document.querySelector('.content-right');

    if (contentRight) {
        const contentRightPosition = contentRight.getBoundingClientRect();
        const isVisible = contentRightPosition.top < window.innerHeight && contentRightPosition.bottom > 0;

        if (isVisible) {
            scrollDown.classList.add('d-none');
        } else {
            scrollDown.classList.remove('d-none');
        }
    }
});
