const images = ["nature.01.jpg","nature.02.jpg","nature.03.jpg","nature.04.jpg","nature.05.jpg"]

const changeImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${changeImage}`;

document.body.appendChild(bgImage);