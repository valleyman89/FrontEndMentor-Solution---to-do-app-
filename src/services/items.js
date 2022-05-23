export const items = [
  {
    id: 1,
    content: "abc",
    completed: false,
    orderId: 1,
  },
  {
    id: 2,
    content: "123",
    completed: false,
    orderId: 1,
  },
];

export function getItems() {
  return items.filter((i) => i);
}
