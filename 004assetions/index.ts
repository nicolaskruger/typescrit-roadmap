// const

const x_00 = "hello" as const;
const x_01 = <const>"hello";

const y_00 = [1, 1] as const;
const y_01 = <const>[1, 2];

const z_00 = { text: "text" } as const;
const z_01 = <const>{ text: "text" };

const getPet = () => {
  const pets = [
    {
      kind: "cat",
      miau: "MIAU",
    },
    {
      kind: "dog",
      auau: "AUAU",
    },
  ] as const;

  return pets;
};

getPet().forEach((pet) => {
  if (pet.kind === "dog") {
    console.log("dog", pet.auau);
  } else {
    console.log("cat", pet.miau);
  }
});
