import Color from "./Color";

it("redでColorインスタンスを作成できる", () => {
  const color = new Color("red");
  expect(color.getColorName()).toEqual("red");
});

it("存在しない色でColorインスタンスを作成したら、whiteで作成される", () => {
  const color = new Color("Unexist color");
  expect(color.getColorName()).toEqual("white");
});
