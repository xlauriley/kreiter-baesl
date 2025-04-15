document.addEventListener("DOMContentLoaded", function () {
    const flyerImages = document.querySelectorAll(".flyer");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeBtn = document.getElementById("close");

    flyerImages.forEach(img => {
        img.addEventListener("click", function () {
            lightboxImage.src = this.src;
            lightbox.classList.add("visible");
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.classList.remove("visible");
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.classList.remove("visible");
        }
    });
});


