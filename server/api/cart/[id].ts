import { db } from "~/server/db";
// import { createError, sendError } from "h3";

export default defineEventHandler((e) => {
  const method = e.req.method;
  console.log(e);
  const context = e.context;

  // Extract Paramater from url
  const { id } = context.params;

  const findCartById = (cartId) => {
    // find beer   in db
    let index;
    const cart = db.cart.find((t, i) => {
      if (t.id === cartId) {
        index = i;
        return true;
      }
      return false;
    });

    // throw error if not
    if (!cart) {
      const noFoundError = createError({
        statusCode: 404,
        statusMessage: "cart not found",
        data: {},
      });
      sendError(e, noFoundError);
    }

    return { cart, index };
  };
  if (method === "PUT") {
    const { cart, index } = findCartById(id);
    // update cart oder
    const updatedCart = {
      ...cart,
      completed: !cart.completed,
    };

    db.cart[index] = updatedCart;
    console.log(updatedCart);
    // return list
    return updatedCart;
  }

  if (method === "DELETE") {
    const { cart, index } = findCartById(id);

    db.cart.splice(index, 1);
    return {
      message: "item deleted",
    };
  }
});
