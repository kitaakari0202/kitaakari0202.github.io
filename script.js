
const images = [
];
for (let i = 20; i >= 1; i--) {
    const number = String(i).padStart(2, "0");
    images.push(number + ".png");
}


const galleryElement = document.getElementById("gallery");

images.forEach(image => {

    const tile = document.createElement("a");
    tile.className = "tile";

    tile.href = "gallery/" + image;
    tile.target = "_blank";

    const img = document.createElement("img");
    img.src = "gallery/" + image;
    img.alt = "";

    tile.appendChild(img);
    galleryElement.appendChild(tile);
});

