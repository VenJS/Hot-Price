

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
});

function addImg() {
  const hotPriceDiv = document.querySelectorAll('.hot');
  const image = document.createElement('img');
  image.src = 'images/flame.png';
  hotPriceDiv.appendChild(image);
}

