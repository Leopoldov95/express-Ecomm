const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
// manage users here

const scrypt = util.promisify(crypto.scrypt); // returns a promisified crypto.script
const createUser = async (user) => {
  try {
    // since readFile is async, it must be prmised in order for me to use it!

    // need to parse the data
    let rawData = await fs.promises.readFile("users.json");
    let data = JSON.parse(rawData);
    const newId = uuidv4();
    // encryption magic
    const salt = crypto.randomBytes(8).toString("hex");
    const buffer = await scrypt(user.password, salt, 64);
    data.push({ email: user.email, password: user.password, id: newId });
    fs.promises.writeFile("users.json", JSON.stringify(data, null, 2));
    console.log("user has been uploaded");
    // res.redirect here!
  } catch (err) {
    console.log(err);
  }
};

const getAllUsers = async () => {
  return JSON.parse(
    await fs.promises.readFile("users.json", {
      encoding: "utf8",
    })
  );
};

const getSingleUser = async (email) => {
  const allUsers = await getAllUsers();
  return allUsers.find((user) => user.email === email);
};

module.exports = { createUser, getSingleUser };
