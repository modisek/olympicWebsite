import { connection } from "../../../config/db.js";
import bcrypt from 'bcrypt'


export default async function handler(req, res) {
    const {name, password} = req.body;

//console.log(req.query)
    console.log(name,password)
    const result = await connection.promise().query("SELECT * from users WHERE name = ?", [req.query.id,
]);
    //console.log(result[0][0].usertype)
    if (result != []){
    const val = await bcrypt.compare(req.query.id, result[0][0].password)
    if (val){
        res.redirect("/admin")
    }
    else
    {
        res.redirect("/")
    }
    }
    //res.redirect("/")
    return res.status(200).json(result[0]);
}
