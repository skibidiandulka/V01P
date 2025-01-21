// Scroll animations
document.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach((section) => {
        const position = section.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            section.style.transform = "translateY(0)";
            section.style.opacity = "1";
        }
    });
});

document.querySelectorAll("section").forEach((section) => {
    section.style.transform = "translateY(50px)";
    section.style.opacity = "0";
    section.style.transition = "all 0.6s ease-out";
});
