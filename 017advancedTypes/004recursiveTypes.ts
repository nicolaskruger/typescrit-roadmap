// linked list

type LinkedList<T> = { value: T; next: LinkedList<T> | null };

let list: LinkedList<number> = {
  value: 1,
  next: { value: 2, next: { value: 3, next: null } },
};
