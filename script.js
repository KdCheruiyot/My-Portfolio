// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check localStorage for theme preference
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
}

// Toggle Dark/Light Mode
themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Store theme preference in localStorage
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth"
        });
    });
});


