(() => {
    const aLink1 = document.querySelector("#link1");
    const section1 = document.querySelector(".sec1");

    const aLink2 = document.querySelector("#link2");
    const section2 = document.querySelector(".sec2");

    const aLink3 = document.querySelector("#link3");
    const section3 = document.querySelector(".sec3");

    aLink1.addEventListener("click", (ev) => {
        ev.preventDefault();
        section1.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    })

    aLink2.addEventListener("click", (ev) => {
        ev.preventDefault();
        section2.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
    })

    aLink3.addEventListener("click", (ev) => {
        ev.preventDefault();
        section3.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    })
})();