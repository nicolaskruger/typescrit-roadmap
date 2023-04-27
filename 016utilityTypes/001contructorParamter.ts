type T0_ = ConstructorParameters<ErrorConstructor>;

// type T0 = [message?: string];
type T1_ = ConstructorParameters<FunctionConstructor>;

// type T1 = string[];
type T2_ = ConstructorParameters<RegExpConstructor>;

// type T2 = [pattern: string | RegExp, flags?: string];
type T3_ = ConstructorParameters<any>;

// type T3 = unknown[];

// type T4 = ConstructorParameters<Function>;
