
const images = [
    "https://images.pexels.com/photos/2447786/pexels-photo-2447786.jpeg",
    "https://images.pexels.com/photos/4164759/pexels-photo-4164759.jpeg",
    "./IMG-20260411-WA0016.jpg"
];

let currentSlide = 0;

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + images.length) % images.length;

    if (currentSlide == 0) {
       document.getElementById("slideImage").src = images[0];
    } else{
        document.getElementById("slideImage").src = images[currentSlide];
    }
}

setInterval(() => {
    changeSlide(1);
}, 4000);




const pageLinks = document.querySelectorAll("nav a[data-page]");
const pagePreview = document.getElementById("pagePreview");
const previewFrame = document.getElementById("previewFrame");

let hideTimer;

pageLinks.forEach(link => {
    link.addEventListener("mouseenter", function() {
        clearTimeout(hideTimer);

        previewFrame.src = link.dataset.page;
        pagePreview.classList.remove("hidden");
    });
});

document.querySelector("header").addEventListener("mouseleave", function() {
    hideTimer = setTimeout(function() {
        pagePreview.classList.add("hidden");
    }, 500);
});

pagePreview.addEventListener("mouseenter", function() {
    clearTimeout(hideTimer);
});

pagePreview.addEventListener("mouseleave", function() {
    pagePreview.classList.add("hidden");
});

