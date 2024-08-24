//video yt
//Lucia Amatriain - comision 2

let ilusion;
let blanco, negro;
let Ancho, Alto, ancho, alto;
let debug;

function preload() {
  ilusion = loadImage("data/ilusion2.png");
}


function setup() {
  createCanvas(800, 400);
  debug = false;
  //tamaños
  Ancho= 40;
  Alto= 48;
  //colores
  colorMode(HSB);
  blanco = color(0, 0, 360);
  negro = color(0, 360, 0);
}


function draw() {
  background(61);//para no tener que modificar el colorMode ni usar push()/pop() ajuste el tono 155RGB a 61HSB
  rectBlanco(Ancho, Alto);
  rectNegro(Ancho, Alto);
  ilusion.resize(600, 400);
  image(ilusion, -200, 0);

  if (debug) {
    Ancho=40;
    Alto=48;
    blanco= color(0, 0, 360);
    negro= color(0, 360, 0);
    debug=false;
  }
}

function mouseDragged() {
  interaccion(remapX(0, 360), remapY(0, 360));
}

function keyPressed() {
  if (key== ' ') {
    debug=!debug;
  } else {
    Ancho= ((random(20, 40)));
    Alto= ((random(48, 68)));
  }
}
