const galleryElement = document.getElementById("gallery");

const images = [];

for (let i = 17; i >= 1; i--) {
    const number = String(i).padStart(2, "0");
    images.push(number + ".png");
}

images.forEach((image, index) => {
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
