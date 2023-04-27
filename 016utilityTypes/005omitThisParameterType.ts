function toHexOmit(this: Number) {
  return this.toString(16);
}

const fiveToHexOmit: OmitThisParameter<typeof toHexOmit> = toHexOmit.bind(5);

console.log(fiveToHexOmit());
