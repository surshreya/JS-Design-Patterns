class Shape {
  constructor(color, sides, name) {
    this.color = color;
    this.sides = sides;
    this.name = name;
  }
}

const shape1 = new Shape("blue", "4", "square");
const shape2 = new Shape("red", "3", "triangle");

console.log(shape1, shape2);
