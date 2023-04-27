class Ci {
  x = 0;
  y = 0;
}

type T0intanceOf = InstanceType<typeof Ci>;

// type T0intanceOf = C
type T1intanceOf = InstanceType<any>;

// type T1intanceOf = any
type T2intanceOf = InstanceType<never>;

// type T2intanceOf = never
// type T3intanceOf = InstanceType<string>;
// Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.

// type T3intanceOf = any
// type T4intanceOf = InstanceType<Function>;
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
//   Type 'Function' provides no match for the signature 'new (...args: any): any'.

// type T4intanceOf = any
