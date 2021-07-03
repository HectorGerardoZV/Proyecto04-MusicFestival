document.addEventListener("DOMContentLoaded", function() {
    addGallery();
});

function addGallery() {
    const gallery = document.querySelector(".gallery__content");

    for (let i = 1; i <= 12; i++) {
        const li = document.createElement("LI");
        const img = document.createElement("IMG");
        img.src = `../../build/img/small-img/gallery-img-${i}.jpg`;
        img.dataset.imagenId = i;
        img.onclick = openImgBig;
        li.appendChild(img);
        gallery.appendChild(li);

    }

}



function openImgBig(e) {
    const idImg = parseInt(e.target.dataset.imagenId);
    console.log(idImg);
}