import { v4 as uuid } from "uuid";

export const item1 = {
  id: uuid(),
  title: "Faire une app React",
  datetime: new Date("Octobre 19, 2021 10:24:00").toDateString(),
  check: false,
};

export const item2 = {
  id: uuid(),
  title: "100 tractions",
  datetime: new Date("Octobre 19, 2021 10:30:00").toDateString(),
  check: false,
};

export const item3 = {
  id: uuid(),
  title: "Dej avec babes",
  datetime: new Date("Octobre 19, 2021 14:02:00").toDateString(),
  check: true,
};
