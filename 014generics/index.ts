//generics

import { Type } from "typescript";

function identity<Type>(arg: Type): Type {
  return arg;
}

// generic types

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

let myIdentity01: <Type>(arg: Type) => Type = identity;
let myIdentity02: <Input>(arg: Input) => Input = identity;
let myIdentity03: { <Type>(arg: Type): Type } = identity;

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

let myIdentity04: GenericIdentityFn = identity;

interface GenericIdentityFn01<Type> {
  (arg: Type): Type;
}

let myIdentity05: GenericIdentityFn01<number> = identity;

// generic class

class GenericNumber<NumType> {
  zeroValue!: NumType;
  add!: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// generic constrain

interface Lengthwise {
  length: number;
}

function loggingIdentity02<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

// Using Type Parameters in Generic Constraint

const getProperty = <Type, Key extends keyof Type>(type: Type, key: Key) => {
  return type[key];
};

const prop = { a: 1, b: 2 };

getProperty(prop, "a");

// using class types in generic

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
