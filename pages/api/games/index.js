import { connection } from "../../../config/db.js";
export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getGames(req, res);
    case "POST":
      return await postGames(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}
const getGames = async (req, res) => {
  try {
    const query = "select * from games";
    const results = await connection.promise().query(query);
    return res.status(200).json(results[0]);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const postGames = async (req, res) => {
  try {
    const { game_name, game_url } = req.body;
    const results = await connection
      .promise()
      .query("INSERT INTO games SET ?", {
        game_name,
        game_url,
      });

    return res.status(200).json({ ...req.body, id: results.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
