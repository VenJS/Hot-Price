

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
});

function addImg() {
  const hotPrice = document.querySelectorAll('.hot');
  for (let index = 0; index < hotPrice.length; index++) {
    const image = document.createElement('img');
    image.src = 'images/flame.png';
    hotPrice[index].appendChild(image);
  }
}

addImg()

