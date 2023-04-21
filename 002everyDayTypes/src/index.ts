// the primitive type

const str: string = "hello word";
const num: number = 25;
const bool: boolean = true;

const verifyType = (
  value: any,
  vType:
    | "string"
    | "number"
    | "bigint"
    | "boolean"
    | "symbol"
    | "undefined"
    | "object"
    | "function"
) => {
  if (typeof value == vType) console.log(typeof value);
};

verifyType(str, "string");
verifyType(num, "number");
verifyType(bool, "boolean");

// array

const arr: string[] = ["naruto", "sasuke", "sakura"];

// union type

const verify = (value: number | string) => {
  if (typeof value === "number") {
    console.log("number", value.toFixed(10));
  }
  if (typeof value === "string") {
    console.log("string", value.toUpperCase());
  }
};

verify("text");
verify(12);

// type alias

type Pokemon = {
  name: string;
  hp: number;
  atk: number;
};

// extend type alias

type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

const bear: Bear = {
  honey: true,
  name: "bear",
};
bear.name;
bear.honey;

// extend interface

interface IAnimal {
  name: string;
}

interface IBear extends IAnimal {
  honey: boolean;
}

const iBear: IBear = {
  honey: true,
  name: "Bear",
};
bear.name;
bear.honey;

// type assertion

const getValue = (): any => {};

const assert1: string = getValue() as string;

const assert2: number = <number>getValue();

const strToNum = "" as any as number;

type Query = {
  url: string;
  method: "GET";
};

const urlRequest = (query: Query) => {};

const literal01 = { url: "url", method: "GET" };

const literal02 = { url: "url", method: "GET" as "GET" };

const literal03 = { url: "url", method: "GET" } as const;

// urlRequest(literal01) compiling error

urlRequest(literal02);
urlRequest(literal03);

// null and undefined

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
function liveSafely(x?: number | null) {
  // No error
  console.log(x?.toFixed());
}
try {
  liveDangerously(null);
} catch (error) {
  console.log("error life");
}

try {
  liveSafely(null);
  console.log("sucess");
} catch (error) {}
