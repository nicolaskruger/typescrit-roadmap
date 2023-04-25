// typeof

// "string";
// "number";
// "bigint";
// "boolean";
// "symbol";
// "undefined";
// "object";
// "function";

function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
      // 'strs' is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}
