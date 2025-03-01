document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".clickable");
    let modalImage = document.getElementById("modalImage");

    images.forEach(img => {
        img.addEventListener("click", function() {
            modalImage.src = this.src;
            
        });
    });
});