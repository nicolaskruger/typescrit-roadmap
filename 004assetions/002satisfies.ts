// Each property can be a string or an RGB tuple.
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  bleu: [0, 0, 255],
  //  ^^^^ sacrebleu - we've made a typo!
};
// We want to be able to use array methods on 'red'...
const redComponent = palette.red.slice(0);
// or string methods on 'green'...
const greenNormalized = palette.green.toUpperCase();

type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];
const palette01: Record<Colors, string | RGB> = {
  red: [255, 0, 0],
  green: "#00ff00",
  bleu: [0, 0, 255],
  //  ~~~~ The typo is now correctly detected
};
// But we now have an undesirable error here - 'palette.red' "could" be a string.
const redComponent01 = palette.red.slice(0);

type Colors01 = "red" | "green" | "blue";
type RGB01 = [red: number, green: number, blue: number];
const palette02 = {
  red: [255, 0, 0],
  green: "#00ff00",
  bleu: [0, 0, 255],
  //  ~~~~ The typo is now caught!
} satisfies Record<Colors01, string | RGB01>;
// Both of these methods are still accessible!
const redComponent02 = palette.red.slice(0);
const greenNormalized02 = palette.green.toUpperCase();
