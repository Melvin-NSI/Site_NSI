document.addEventListener("DOMContentLoaded", function() {
    const modpacks = document.querySelectorAll(".modpack");
    const scrollTopBtn = document.createElement("button");
    const toggleThemeBtn = document.createElement("button");

    // Ajouter le bouton de retour en haut
    scrollTopBtn.innerText = "⬆ Retour en haut";
    scrollTopBtn.classList.add("scroll-top-btn");
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function() {
        scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

    // Animation de chargement des modpacks
    modpacks.forEach((modpack, index) => {
        setTimeout(() => {
            modpack.classList.add("visible");
        }, index * 200);
    });

    // Bouton mode sombre
    toggleThemeBtn.innerText = "🌙 Mode Sombre";
    toggleThemeBtn.classList.add("toggle-theme-btn");
    document.body.appendChild(toggleThemeBtn);

    toggleThemeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        toggleThemeBtn.innerText = document.body.classList.contains("dark-mode") ? "☀ Mode Clair" : "🌙 Mode Sombre";
    });
});

// Lien du script dans le fichier HTML
// <script src="script.js"></script>
