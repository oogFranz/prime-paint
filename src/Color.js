export default class Color {
  static get COLOR() {
    return ["white", "red", "green", "blue"];
  }

  constructor(value = 0) {
    this.value = value;
  }

  next() {
    let newValue = this.value + 1;
    if (newValue > Color.COLOR.length) {
      newValue %= Color.COLOR.length;
    }
    return new Color(newValue);
  }

  getColorName() {
    return Color.COLOR[this.value];
  }
}
