document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const imagesPath = "src/img/gallery/";
    const imagesNumber = 8;

    let imageFilenames = [];

    for (let i = 1; i <= imagesNumber; i++) {
        imageFilenames.push(`${i}.jpg`);
    }

    imageFilenames.forEach((filename) => {
        const img = document.createElement("img");
        img.src = `${imagesPath}${filename}`;
        img.alt = "Gallery Image";
        img.classList.add("gallery-image");
        img.classList.add("border-glow-round");
        gallery.appendChild(img);
    });
    
    const galleryImages = document.querySelectorAll(".gallery-image");
    let currentlyEnlarged = null; // Track the currently enlarged image

    galleryImages.forEach(image => {
        image.addEventListener("click", function () {
            // If there's already an enlarged image, shrink it
            if (currentlyEnlarged && currentlyEnlarged !== this) {
                currentlyEnlarged.classList.remove("enlarged");
            }

            // Toggle the 'enlarged' class on the clicked image
            if (this === currentlyEnlarged) {
                // If the same image is clicked again, shrink it
                this.classList.remove("enlarged");
                currentlyEnlarged = null;
            } else {
                // Otherwise, enlarge the clicked image
                this.classList.add("enlarged");
                currentlyEnlarged = this;
            }
        });
    });
});