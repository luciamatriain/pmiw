function interaccion(posX, posY) {
  blanco = color(posX, 360, posY);
  negro = color(posY, 360, posX);
}

function remapX(min, max) { 
  return map(mouseX, min, width, min, max);
}

function remapY(min, max) {
  return map(mouseY, min, height, min, max);
}
