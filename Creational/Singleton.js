class ConfigureVals {
  constructor(xpoint = 0, ypoint = 0, shape = null) {
    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.shape = shape;

    ConfigureVals._instance = this;
  }

  static getConfiguration(config = {}) {
    if (!ConfigureVals._instance) {
      const { xpoint, ypoint, shape } = config;
      ConfigureVals._instance = new ConfigureVals(xpoint, ypoint, shape);
    }
    return ConfigureVals._instance;
  }
}

let config1 = ConfigureVals.getConfiguration({
  xpoint: 8,
  ypoint: 9,
  shape: "rectangle",
});
console.log(config1);

let config2 = ConfigureVals.getConfiguration({
  xpoint: 2,
  ypoint: 4,
  shape: "circle",
});
console.log(config2);
