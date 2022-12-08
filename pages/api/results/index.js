import { connection } from "../../../config/db.js";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUsers(req, res);
    case "POST":
      return await postUsers(req, res);
    default:
  }
}

const getUsers = async (req, res) => {
  try {
    const query = "select * from results";
    const results = await connection.promise().query(query);
    return res.status(200).json(results[0]);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const postUsers = async (req, res) => {
  try {
    const { sport, score } = req.body;
    const results = await connection
      .promise()
      .query("INSERT INTO results SET ?", {
        sport,
        score,
      });

    return res.status(200).json({ ...req.body, id: results.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
