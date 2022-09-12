import { db } from "~/server/db";
// import { createError, sendError } from "h3";

export default defineEventHandler((e) => {
  const method = e.req.method;
  console.log(e);
  const context = e.context;

  // Extract Paramater from url
  const { id } = context.params;

  const findFavById = (favId) => {
    // find todo in db
    let index;
    const fav = db.fav.find((t, i) => {
      if (t.id === favId) {
        index = i;
        return true;
      }
      return false;
    });

    // throw error if not
    if (!fav) {
      const noFoundError = createError({
        statusCode: 404,
        statusMessage: "fav not found",
        data: {},
      });
      sendError(e, noFoundError);
    }

    return { fav, index };
  };
  if (method === "PUT") {
    const { fav, index } = findFavById(id);
    // update fav oder
    const updatedfav = {
      ...fav,
      completed: !fav.completed,
    };

    db.fav[index] = updatedfav;
    console.log(updatedfav);
    // return list
    return updatedfav;
  }

  if (method === "DELETE") {
    const { fav, index } = findFavById(id);

    db.fav.splice(index, 1);
    return {
      message: "item deleted",
    };
  }
});
