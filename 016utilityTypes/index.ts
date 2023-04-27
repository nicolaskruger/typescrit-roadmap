// utility types

// awaited

type A = Awaited<Promise<string>>;

type B = Awaited<Promise<Promise<number>>>;

type C = Awaited<boolean | Promise<number>>;

//  partial

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

// required
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

// const obj2: Required<Props> = { a: 5 };

// readonly

interface Todo0 {
  title: string;
}

const todo: Readonly<Todo0> = {
  title: "Delete inactive users",
};

// todo.title = "Hello";

// record

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

// pick

interface Todo01 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo01, "title" | "completed">;

const todo0: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;

// omit

interface Todo02 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview0 = Omit<Todo02, "description">;

const todo02: TodoPreview0 = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

todo;

type TodoInfo = Omit<Todo02, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

todoInfo;

//exclude

type T0 = Exclude<"a" | "b" | "c", "a">;

// type T0 = "b" | "c";
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

// type T1 = "c";
type T2 = Exclude<string | number | (() => void), Function>;

// type T2 = string | number;

// extract

type T01 = Extract<"a" | "b" | "c", "a" | "f">;

// type T0 = "a";
type T11 = Extract<string | number | (() => void), Function>;

// type T1 = () => void;

// no null able

type T02 = NonNullable<string | number | undefined>;

// type T0 = string | number;
type T12 = NonNullable<string[] | null | undefined>;

// type T1 = string[];

// parameter

declare function f1(arg: { a: number; b: string }): void;

type T04 = Parameters<() => string>;

// type T0 = [];
type T14 = Parameters<(s: string) => void>;

// type T1 = [s: string];
type T24 = Parameters<<T>(arg: T) => T>;

// type T2 = [arg: unknown];
type T34 = Parameters<typeof f1>;

// type T3 = [
//   arg: {
//     a: number;
//     b: string;
//   }
// ];
type T44 = Parameters<any>;

// type T4 = unknown[];
type T54 = Parameters<never>;

// type T5 = never;
// type T64 = Parameters<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.

// type T6 = never;
// type T74 = Parameters<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.

// type T7 = never;
