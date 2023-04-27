declare function f1(): { a: number; b: string };

type T0Ret = ReturnType<() => string>;

// type T0Ret = string
type T1Ret = ReturnType<(s: string) => void>;

// type T1Ret = void
type T2Ret = ReturnType<<T>() => T>;

// type T2Ret = unknown
type T3Ret = ReturnType<<T extends U, U extends number[]>() => T>;

// type T3Ret = number[]
type T4Ret = ReturnType<typeof f1>;

// type T4Ret = {
//     a: number;
//     b: string;
// }
type T5Ret = ReturnType<any>;

// type T5Ret = any
type T6Ret = ReturnType<never>;

// type T6Ret = never
// type T7Ret = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.

// type T7Ret = any
// type T8Ret = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.

// type T8 = any
