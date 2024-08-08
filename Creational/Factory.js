class ToyDuck {
  constructor(color, price) {
    this.color = color;
    this.price = price;
  }
}

class ToyCar {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }
}

class ToyFactory {
  constructor() {
    this.toy = null;
  }
  createToy(toy) {
    const { toyType, ...attributes } = toy;
    if (toyType === "car") {
      this.toy = new ToyCar(
        attributes.color,
        attributes.price,
        attributes.name
      );
    } else if (toyType === "duck") {
      this.toy = new ToyDuck(attributes.color, attributes.price);
    }
    return this.toy;
  }
}

const toyFactory = new ToyFactory();
const car = toyFactory.createToy({
  toyType: "car",
  color: "blue",
  price: 12,
  name: "honda",
});
console.log(car);
