export default class Color {
  static get COLOR() {
    return ["white", "red", "green", "blue"];
  }

  constructor(colorName = "white") {
    this.colorName = "white";
    if (Color.COLOR.includes(colorName)) {
      this.colorName = colorName;
    }
  }

  next() {
    const colors = Color.COLOR;
    let newIndex = colors.indexOf(this.colorName) + 1;
    if (newIndex >= colors.length) {
      newIndex %= colors.length;
    }
    return new Color(colors[newIndex]);
  }

  getColorName() {
    return this.colorName;
  }
}
