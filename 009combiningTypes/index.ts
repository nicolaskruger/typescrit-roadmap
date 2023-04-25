// union types

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });

//

function printId01(id: number | string) {
  console.log(id.toUpperCase());
}

//

function printId02(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

//

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

// intersect

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & BusinessPartner & Contact;

let e: Employee = {
  id: 100,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "(408)-897-5684",
  credit: 1000,
};

// type alias

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// keyof

type Point0 = { x: number; y: number };
type P = keyof Point0;

const keyP: P = "x";

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

const keyA: A = 1;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

const keyM: M = "";
