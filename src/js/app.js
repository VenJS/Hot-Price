

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
});

function addImg() {
  const hotPrice = document.querySelectorAll('.hot');
  const image = document.createElement('img');
  image.src = 'images/flame.png';
  for (let index = 0; index < hotPrice.length; index++) {
    hotPrice[index].appendChild(image);
    
  }
}

addImg()

