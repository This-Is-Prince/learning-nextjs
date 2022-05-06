// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir("blogdata", (err, data) => {
    if (!err) {
      console.log("hello");
      res.status(200).json(data);
    }
  });
}
