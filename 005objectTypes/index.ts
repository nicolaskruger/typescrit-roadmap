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

interface Box<T> {
  content: T;
}

const setContent = <T extends unknown>(box: Box<T>, content: T) => {
  box.content = content;
};

// ready only array

const doSomethingWithReadOnlyArray = (array: ReadonlyArray<string>) => {
  // can not push
};

// tuple

type Tuple = [number, number, number?];

function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  // ...
}

function tReadButtonInput(name: string, version: number, ...input: boolean[]) {
  // ...
}
