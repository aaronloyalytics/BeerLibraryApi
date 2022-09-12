import { Client } from "@notionhq/client";
import { readBody } from "h3";

export default async (req, res) => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  if (req.method === "PATCH") {
    let content = await readBody(req);
    console.log(content);
    notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: content.Uname,
              },
            },
          ],
        },
        Email: {
          rich_text: [
            {
              text: {
                content: content.email,
              },
            },
          ],
        },

        Message: {
          rich_text: [
            {
              text: {
                content: content.message,
              },
            },
          ],
        },
      },
    });
    res.statusCode = 200;
    res.end();
  } else {
    console.log("Not PATCH");
  }
};
