let images = document.querySelectorAll("#carrusel img");
let current = 0;

function changeImage() {
  images[current].className = "";
  current = (current + 1) % images.length;
  images[current].className = "active";
}

let interval = setInterval(changeImage, 3000);