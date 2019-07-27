//Funciones para calcular el area de figuras geometricas


//Para el cuadrado
const square = (s) => {
    return s * s;
}

//Para el rectangulo
const rectangle = (b, h) => {
    return b * h;
}

//Para el triangulo
const triangle = (b, h) => {
    return b * h / 2;
}

//Para el circulo
const circle = (r) => {
    return Math.Pi * r * r;
}

//Para el elipse
const ellipse = (a, b) => {
    return Math.Pi * a * b;
};

module.exports = {
    square,
    rectangle,
    triangle,
    circle,
    ellipse,
}