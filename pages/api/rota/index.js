import { connection } from "../../../config/db.js"
export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getRota(req, res);
    case "POST":
      return await postRota(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}
const getRota = async (req, res) => {
  try {
    const query = "select * from rota";
    const results = await connection.promise().query(query);
    return res.status(200).json(results[0]);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const postRota = async (req, res) => {

    try{
        const { activity, volunteer }  = req.body;
        const results = await connection.promise().query("INSERT INTO results SET ?", {
         activity, 
        volunteer,
        });
        return res.status(200).json({ ...req.body, id: results.insertId});
    } catch (error){
        return res.status(500).json({message: error.message});
    }
};
