document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".main-btn");
    const body = document.body;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    const getFinalUrl = (btn) => {
        const baseUrl = btn.getAttribute('href');
        const params = new URLSearchParams({
            offer_id: "1135",
            partner_id: "20098",
            landing_id: "4494",
            utm_medium: "affiliate"
        });

        btn.setAttribute("href", `${baseUrl}?${params.toString()}`);
    };

    getFinalUrl(button);

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
