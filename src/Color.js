export default class Color {
  static get COLOR() {
    return ["white", "red", "green", "blue", "black"];
  }

  constructor(colorName = "white") {
    this.colorName = Color.COLOR.includes(colorName) ? colorName : "white";
  }

  getColorName() {
    return this.colorName;
  }
}
