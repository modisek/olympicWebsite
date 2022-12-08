import bcrypt from "bcrypt";
import { connection } from "../../../config/db.js";
//get user from database
//compare password  provided from form and one from database
export default async function handler(req, res) {
  const { name, password } = req.body;
  const result = await connection
    .promise()
    .query(`select * from users where name = '${name}'`);
  console.log(result[0][0]);

  const val = await bcrypt.compare(password, result[0][0].password);
  console.log(val);
  if (val) {
    if (result[0][0].usertype === "admin") {
      res.status(200).json({ msg: "admin" });
    } else if (result[0][0].usertype === "volunteer") {
      res.status(200).json({ msg: "volunteer" });
    } else if (result[0][0].usertype === "user") {
      res.status(200).json({ msg: "user" });
    }
  } else res.redirect("/login");
}
