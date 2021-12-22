import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
});

const img = document.createElement('IMG');
img.setAttribute('src', 'images/flame.png');
document.querySelectorAll('.hot').appendChild(img);
console.log(img);