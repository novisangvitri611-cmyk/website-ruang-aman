
// Menu navigasi mobile
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Menutup menu setelah memilih halaman
document.querySelectorAll("#navMenu a").forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Tahun otomatis
document.getElementById("year").textContent =
    new Date().getFullYear();
