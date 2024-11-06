function setup() {
  createCanvas(400, 400,WEBGL);
  terra=loadImage('terra.jpg')
}

function draw() {
  background(310,202,120); //cor de fundo
  rotateY(millis()/1000) //rotaçãon da terra
  texture(terra); //textura da terra, Imagem.
  sphere(140, 160); //esfera 3D


}
