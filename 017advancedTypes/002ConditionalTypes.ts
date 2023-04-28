interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;

//

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");

let b = createLabel(2.8);

let c = createLabel(Math.random() ? "hello" : 42);

//

type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMessageContents = MessageOf<Email>;

type MessageOfNever<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContentsNever = MessageOfNever<Email>;

type DogMessageContents = MessageOfNever<Dog>;

// flatten

type Flatten<T> = T extends any[] ? T[number] : T;
// type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

// Extracts out the element type.
type Str = Flatten<string[]>;

// Leaves the type alone.
type Num = Flatten<number>;

// get return type

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num0 = GetReturnType<() => number>;

type Str0 = GetReturnType<(x: string) => string>;

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

// distributive conditional

type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>;

// type StrArrOrNumArr = string[] | number[];

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr2 = ToArrayNonDist<string | number>;
