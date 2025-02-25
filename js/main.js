document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".main-btn");
    const body = document.body;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isTouchDevice && isPortrait) {
        if (button) {
            button.addEventListener("click", (event) => {
                event.preventDefault();

                body.classList.add("hover-mob");

                setTimeout(() => {
                    window.location.href = button.getAttribute("href");
                }, 700);
            });
        }
    } else if (isTouchDevice) {
        if (button) {
            button.addEventListener("click", (event) => {
                event.preventDefault();

                body.classList.add("hover");

                setTimeout(() => {
                    window.location.href = button.getAttribute("href");
                }, 700);
            });
        }
    } else {
        if (button) {
            button.addEventListener("mouseenter", () => {
                body.classList.add("hover");
            });

            button.addEventListener("mouseleave", () => {
                body.classList.remove("hover");
            });
        }
    }
});
