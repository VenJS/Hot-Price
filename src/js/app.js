

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
});

function addImg() {
  const image = document.createElement('img');
  image.src = 'images/flame.png';
  document.querySelector('.hot').appendChild(image);
}

addImg()

