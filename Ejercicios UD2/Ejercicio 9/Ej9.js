var photos = new Array();
var which = 0;
photos[0] = "Fotos.Ej9/Chandelure.png";
photos[1] = "Fotos.Ej9/aegislash.png";
photos[2] = "Fotos.Ej9/Crobat.png";
photos[3] = "Fotos.Ej9/Gengar.png";
photos[4] = "Fotos.Ej9/Lucario.png";
photos[5] = "Fotos.Ej9/Quagsire.png";
photos[6] = "Fotos.Ej9/Necrozma.png";
photos[7] = "Fotos.Ej9/magikarp.png";
photos[8] = "Fotos.Ej9/MegaRayquaza.png";
photos[9] = "Fotos.Ej9/Dragapult.png";

function backward() {
    if (which > 0) {
        window.status = '';
        which--;
        document.images.photoslider.src = photos[which];
    }
}

function forward() {
    if (which < photos.length - 1) {
        which++;
        document.images.photoslider.src = photos[which];
    } else {
        window.status = 'End of gallery';
    }
}
