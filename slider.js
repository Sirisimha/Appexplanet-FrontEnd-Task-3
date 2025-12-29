let images = [
  "https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg",
  "https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg"
];

let i = 0;

function next() {
  i = (i + 1) % images.length;
  document.getElementById("slide").src = images[i];
}

function prev() {
  i = (i - 1 + images.length) % images.length;
  document.getElementById("slide").src = images[i];
}

