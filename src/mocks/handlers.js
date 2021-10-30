import { rest } from "msw";
import { item1, item2, item3 } from "../fixtures/item_fixtures";

export const handlers = [
  rest.get("/tasks", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([item1, item2, item3]));
  }),

  rest.post("/tasks", (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(JSON.parse(req.body)));
  }),

  rest.delete("/task/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.put("/task/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
