let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, canvas, ctx;

function generateMeme (img, topText, bottomText, topTextSize, bottomTextSize) {
let fontSize;

    // tamaño del liendo a  la imagen
    canvas.width = img.width;
    canvas.height = img.height;
    img.width=1200;
    img.height=700;

    // lienzo claro
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // dibuja imagen pricipal
    ctx.drawImage(img, 0, 0);

    // estilo de txt: blanco con bordes negros(txt centrado)
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    // tamaño del txt superior
    fontSize = canvas.width * topTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 20;

    // dibuja el txt superior
    ctx.textBaseline = 'top';
    topText.split('\n').forEach(function (t, i) {
    ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });

    // tamaño del boton del txt
    fontSize = canvas.width * bottomTextSize;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = fontSize / 20;

    // dibuja el boton de txt
    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach(function (t, i) { 
    ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

function init () {
    // inicializar variables
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    topTextSizeInput = document.getElementById('top-text-size-input');
    bottomTextSizeInput = document.getElementById('bottom-text-size-input');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');

    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    // txt predeterminado

    topTextInput.value = bottomTextInput.value = 'Escriba algo';

    // genera el boton
    generateBtn.addEventListener('click', function () {
    //Lee la imagen como URL usando la API FileReader
    let reader = new FileReader();
    reader.onload = function () {
    let img = new Image;
    img.src = reader.result;
    generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
    };
    reader.readAsDataURL(imageInput.files[0]);
    });
}

init();
