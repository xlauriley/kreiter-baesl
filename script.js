document.addEventListener("DOMContentLoaded", function () {
    const flyerImages = document.querySelectorAll(".flyer"); // Alle Bilder im Event-Bereich
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeBtn = document.getElementById("close");

    // Für jedes Bild im Bereich: Klick-Event zum Vergrößern
    flyerImages.forEach(function (img) {
        img.addEventListener("click", function () {
            lightboxImage.src = img.src; // Setzt das große Bild entsprechend
            lightbox.classList.add("visible");
        });
    });

    // Schließen mit dem X
    closeBtn.addEventListener("click", function () {
        lightbox.classList.remove("visible");
    });

    // Schließen durch Klick auf Hintergrund
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.classList.remove("visible");
        }
    });
});

