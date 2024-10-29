document.addEventListener('DOMContentLoaded', function() {
    const navIcon = document.querySelector('.menu-icon');

    if (navIcon) {
        navIcon.addEventListener('click', function() {
            navIcon.classList.toggle('open');
            document.querySelector('body').classList.toggle('hidden');
        });
    }
});
