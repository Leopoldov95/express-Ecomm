const fs = require("fs");
const util = require("util");

// manage users here

const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/login");
  }

  next();
};

const createUser = async (user) => {
  try {
    // since readFile is async, it must be prmised in order for me to use it!

    // need to parse the data
    let rawData = await fs.promises.readFile("users.json");
    let data = JSON.parse(rawData);
    data.push({ email: user.email, password: user.password });
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

module.exports = { createUser, requireAuth, getSingleUser };
