/* --- Funktion zum Zoomen des Eventflyers --- */
document.addEventListener("DOMContentLoaded", function () {
    const flyerImage = document.getElementById("flyerImage");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeBtn = document.getElementById("close");

    // Öffnet die Lightbox mit dem Bild
    flyerImage.addEventListener("click", function () {
        lightbox.classList.add("visible");
    });

    // Schließt die Lightbox, wenn auf "X" oder den Hintergrund geklickt wird
    closeBtn.addEventListener("click", function () {
        lightbox.classList.remove("visible");
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.classList.remove("visible");
        }
    });
});
