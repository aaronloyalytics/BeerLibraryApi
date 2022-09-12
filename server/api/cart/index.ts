import { db } from "~/server/db";
import { v4 } from "uuid";

export default defineEventHandler(async (e) => {
  // console.log(e);
  const method = e.req.method;
  if (method === "GET") {
    return db.cart;
  }
  if (method === "POST") {
    const body = await useBody(e);
    if (!body.item) {
      const noFoundError = createError({
        statusCode: 400,
        statusMessage: "No Item Provided",
        data: {},
      });
      sendError(e, noFoundError);
    }
    const newCart = {
      id: v4(),
      item: body.item,
      completed: false,
    };
    console.log(newCart);
    db.cart.push(newCart);
    return newCart;
  }
});
