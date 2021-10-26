import { v4 as uuid } from "uuid";

export const createNewTodoItem = (title) => {
  return { title: title, datetime: new Date(), id: uuid() };
};

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
