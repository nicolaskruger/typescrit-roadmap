// read only

type Book = {
  readonly name: string;
};

const punpun: Book = {
  name: "oyasumi punpun",
};

// punpun.name = "girl in the shore";

// index signature

type BookDictionary = {
  [key: string]: Book;
};

const library: BookDictionary = {
  punpun: punpun,
  gta: { name: "gta" },
};

type BookDictionaryOnly = {
  readonly [key: string]: Book;
};

const libraryOnly: BookDictionary = {};

// libraryOnly["only"] = { name: punpun };

// extending types

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};

type Naruto = {
  chakra: number;
};

type DBZ = {
  ki: number;
};

type DBZN = Naruto & DBZ;

const narutoZ: DBZN = {
  ki: 8000,
  chakra: 3000,
};

//TODO generic object
