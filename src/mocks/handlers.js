import { rest } from "msw";
import { item1, item2, item3 } from "../fixtures/item_fixtures";

export const handlers = [
  rest.get("/tasks", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([item1, item2, item3]));
  }),
  rest.delete("/tasks/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
