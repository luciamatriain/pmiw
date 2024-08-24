function rectBlanco(ancho, alto) { 
  push();
  noStroke();
  fill(blanco);
  for ( a = 0; a < 3; a++) {
    for ( b = 0; b < 400; b += 86) {
      posX = 380 + (a % 3) * 12;
      posY = 2 + a * 52;
      rect(posX + b, posY, ancho, alto);
    }
  }
  for ( c = 0; c < 3; c++) {
    for ( d=0; d < 400; d += 86) {

      posX2 =390 + (c % 2) * (-12);
      posY2 =158+ c * 52;
      rect(posX2+ d, posY2, ancho, alto);
    }
  }
  for ( e = 0; e < 3; e++) {
    for ( f=0; f < 400; f += 86) {

      posX3= 404 + (e % 2) * (-12);
      posY3=314 + e * 52;
      rect(posX3+f, posY3, ancho, alto);
    }
  }
  pop();
}


function rectNegro( ancho, alto) {//no necesito declararla xq las variables 'let' pueden ser modificadas
  push();
  noStroke();
  fill(negro);

  for ( g = 0; g < 3; g++) {
    for ( h = 0; h < 400; h += 86) {
      posX4 = 423 + (g % 3) * 12;
      posY4 = 2 + g * 52;
      rect(posX4 + h, posY4, ancho, alto);
    }
  }
  for ( i = 0; i < 3; i++) {
    for ( j=0; j < 400; j += 86) {

      posX5 =433 + (i % 2) * (-12);
      posY5 =158+ i * 52;
      rect(posX5+ j, posY5, ancho, alto);
    }
  }

  for ( k = 0; k < 3; k++) {
    for ( l=0; l < 400; l += 86) {

      posX6= 447 + (k % 2) * (-12);
      posY6=314 + k * 52;
      rect(posX6+ l, posY6, ancho, alto);
    }
  }
  pop();
}
