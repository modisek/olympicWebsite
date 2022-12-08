import { connection } from "../../../config/db.js";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getComment(req, res);
    case "POST":
      return await postComment(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getComment = async (req, res) => {
  try {
    const query = "select * from comments";
    const results = await connection.promise().query(query);
    return res.status(200).json(results[0]);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const postComment = async (req, res) => {
  try {
    const { header, body } = req.body;
    const results = await connection
      .promise()
      .query("INSERT INTO article SET ?", {
        header,
        body,
      });
    res.redirect("/admin");
    return res.status(200).json({ ...req.body, id: results.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
