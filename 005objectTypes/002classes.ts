// getter setter

class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

const c = new C();

c.length = 10;
console.log("length", c.length);

// declare

interface Animal {
  dateOfBirth: any;
}

interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}

// static Blocks in Classes

const loadLastInstances = () => ({ length: 10 });

class Foo {
  static #count = 0;

  get count() {
    return Foo.#count;
  }

  static {
    try {
      const lastInstances = loadLastInstances();
      Foo.#count += lastInstances.length;
    } catch {}
  }
}

// generic class

class Box1<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const b = new Box1("hello!");

// this types

class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}

class Directory extends FileSystemObject {
  children: FileSystemObject[] = [];
}

interface Networked {
  host: string;
}

const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");

if (fso.isFile()) {
  fso.content;
  console.log("file");
} else if (fso.isDirectory()) {
  fso.children;
  console.log("directory");
} else if (fso.isNetworked()) {
  fso.host;
  console.log("host");
}

const logTitle = (title: string) => {
  console.log("\n");
  console.log("-".repeat(50));
  console.log(`\t${title}`);
  console.log("-".repeat(50));
  console.log("\n");
};

// parameter properties

logTitle("parameter properties");

class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
const a = new Params(1, 2, 3);
console.log(a.x);

// class expression

logTitle("class expressions");

const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};

const m = new someClass("Hello, world");

//abstract class and members

logTitle("abstract class and members");

abstract class Father {
  abstract makeTheError(): string;
}

class Son extends Father {
  makeTheError(): string {
    return "ARRRRRRRRRRRRRRRRR";
  }
}

function great(ctro: typeof Father) {
  // ERROR const maker = new ctro();
}

function graterNew(ctor: new () => Father) {
  const maker = new ctor();
}

// ERROR graterNew(Father);
graterNew(Son);
