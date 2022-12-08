import bcrypt from "bcrypt";

export function comparePass(bodyPass, userPass) {
  const validPassword = bcrypt.compare(body.pass, user.pass);
  if (validPassword) {
    return;
  } else {
    //password incorrect
  }
}
