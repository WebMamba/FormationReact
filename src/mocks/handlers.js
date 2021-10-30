import { rest } from "msw";
import { item1, item2, item3 } from "../fixtures/item_fixtures";

export const handlers = [
  rest.get("/tasks", (req, res, ctx) => {
    const token = req.headers["_headers"]["authorization"].split(" ")[1];

    if (token === "badtoken") {
      return res(ctx.status(401));
    }
    return res(ctx.status(200), ctx.json([item1, item2, item3]));
  }),

  rest.post("/tasks", (req, res, ctx) => {
    const token = req.headers["_headers"]["authorization"].split(" ")[1];

    if (token === "badtoken") {
      return res(ctx.status(401));
    }

    return res(ctx.status(201), ctx.json(JSON.parse(req.body)));
  }),

  rest.delete("/task/:id", (req, res, ctx) => {
    const token = req.headers["_headers"]["authorization"].split(" ")[1];

    if (token === "badtoken") {
      return res(ctx.status(401));
    }

    return res(ctx.status(200));
  }),

  rest.put("/task/:id", (req, res, ctx) => {
    const token = req.headers["_headers"]["authorization"].split(" ")[1];

    if (token === "badtoken") {
      return res(ctx.status(401));
    }

    return res(ctx.status(200));
  }),

  rest.post("/login", (req, res, ctx) => {
    const { email, password } = JSON.parse(req.body);

    if (!email || !password) {
      return res(
        ctx.status(403),
        ctx.json({ error: "Vous devez donner un email et un mot de passe" })
      );
    }

    if (email === "test@null.com" || password === "wrong") {
      return res(
        ctx.status(
          401,
          ctx.json({ error: "Oups ! Impossible de vous trouvez" })
        )
      );
    }

    return res(ctx.status(200), ctx.json({ token: "validtoken" }));
  }),
];
