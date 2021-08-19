(() => {
    const SHOWING_CLASS = "showing";
    const firstSlide = document.querySelector(".slide:first-child");

    function startSlide() {
        const currentSlide = document.querySelector(`.${SHOWING_CLASS}`)
        if (currentSlide) {
            currentSlide.classList.remove(SHOWING_CLASS);
            const nextSlide = currentSlide.nextElementSibling;
            if (nextSlide) {
                nextSlide.classList.add(SHOWING_CLASS);
            } else {
                firstSlide.classList.add(SHOWING_CLASS);
            }
        } else {
            firstSlide.classList.add(SHOWING_CLASS);
        }
    }

    startSlide();
    setInterval(startSlide, 3000);
})()