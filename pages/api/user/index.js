import { connection } from "../../../config/db.js";

import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUsers(req, res);
    case "POST":
      return await postUsers(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getUsers = async (req, res) => {
  try {
    const query = "select * from users";
    const results = await connection.promise().query(query);
    return res.status(200).json(results[0]);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const postUsers = async (req, res) => {

    try{
        let { name, password, usertype}  = req.body;
       

        const salt = await bcrypt.genSalt(10);
       password = await bcrypt.hash(password, salt)
const st = {
            name,
            password,
            usertype,
        }
        const results = await connection.promise().query("INSERT INTO users SET ?",st);
        res.redirect("/login")
        return res.status(200).json({ ...req.body, id: results.insertId});
    } catch (error){
        res.redirect("/register")
        return res.status(500).json({message: error.message});
    }
};
