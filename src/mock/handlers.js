// src/mocks/handlers.js
import { rest } from "msw";
export const handlers = [
  rest.post("/api/items", (req, res, ctx) => {
    // Persist user's authentication in the session
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
  rest.post("/api/stuff", (req, res, ctx) => {
    // Persist user's authentication in the session
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
  rest.get("/api/items", (req, res, ctx) => {
    return res(
      ctx.json({
        username: "admin"
      })
    );
  })
];
