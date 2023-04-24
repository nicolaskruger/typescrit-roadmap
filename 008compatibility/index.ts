// Starting out

interface Pet {
  name: string;
}
let pet: Pet;
// dog's inferred type is { name: string; owner: string; }
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
pet = dog;

//...

interface Pet {
  name: string;
}
let dog2 = { name: "Lassie", owner: "Rudd Weatherwax" };
function greet(pet: Pet) {
  console.log("Hello, " + pet.name);
}
greet(dog2); // OK

let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; // OK
x = y; // Error

let x00 = () => ({ name: "Alice" });
let y00 = () => ({ name: "Alice", location: "Seattle" });
x00 = y00; // OK
y00 = x00; // Error, because x() lacks a location property

// Function Parameter Bivariance

enum EventType {
  Mouse,
  Keyboard,
}
interface Event {
  timestamp: number;
}
interface MyMouseEvent extends Event {
  x: number;
  y: number;
}
interface MyKeyEvent extends Event {
  keyCode: number;
}
function listenEvent(eventType: EventType, handler: (n: Event) => void) {
  /* ... */
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MyMouseEvent) => console.log(e.x + "," + e.y));
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) =>
  console.log((e as MyMouseEvent).x + "," + (e as MyMouseEvent).y)
);
listenEvent(EventType.Mouse, ((e: MyMouseEvent) =>
  console.log(e.x + "," + e.y)) as (e: Event) => void);
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: number) => console.log(e));

// Optional Parameters and Rest Parameters

function invokeLater(args: any[], callback: (...args: any[]) => void) {
  /* ... Invoke callback with 'args' ... */
}
// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ", " + y));
// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));

// enum

enum Status {
  Ready,
  Waiting,
}
enum Color {
  Red,
  Blue,
  Green,
}
let status2 = Status.Ready;
status2 = Color.Green; // Error

// classes

class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {}
}
class Size {
  feet: number;
  constructor(numFeet: number) {}
}
let a: Animal;
let s: Size;
a = s; // OK
s = a; // OK

// GENERICS

interface Empty<T> {}
let x3: Empty<number> = {};
let y3: Empty<string> = {};
x3 = y3; // OK, because y matches structure of x

interface NotEmpty<T> {
  data: T;
}
let xx: NotEmpty<number>;
let yy: NotEmpty<string>;
xx = yy;

let identity = function <T>(x: T): T {
  // ...
  return x;
};
let reverse = function <U>(y: U): U {
  // ...
  return y;
};
identity = reverse; // OK, because (x: any) => any matches (y: any) => any
