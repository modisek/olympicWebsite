import { connection } from "../../../config/db.js";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getSchedule(req, res);
    case "POST":
      return await postSchedule(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getSchedule = async (req, res) => {
  try {
    const query = "select * from schedule";
    const results = await connection.promise().query(query);
    return res.status(200).json(results[0]);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const postSchedule = async (req, res) => {
  try {
    const { activity, date_time } = req.body;
    const results = await connection
      .promise()
      .query("INSERT INTO schedule SET ?", {
        activity,
        date_time,
      });

    return res.status(200).json({ ...req.body, id: results.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
