class Poligono {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
  area() {
    return this.#calcArea();
  }
  #calcArea() {
    return this.altura * this.largura;
  }
}

const poligono = new Poligono(30, 40);

console.log(poligono.area());
