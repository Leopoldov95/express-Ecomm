// here will be all the helper functions to handle images and JSON data

const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid");
//const path = require("path");

const addProduct = async (item) => {
  // since readFile is async, it must be prmised in order for me to use it!
  item.id = uuidv4();
  // need to parse the data
  let rawData = await fs.promises.readFile("products.json");
  let data = JSON.parse(rawData);
  //console.log(item);
  data.push(item);
  fs.promises.writeFile("products.json", JSON.stringify(data, null, 2));
};

// get all the items and then use the result to render each indiviual display card
// may want to add error handling
const getAllItems = async () => {
  return JSON.parse(
    await fs.promises.readFile("products.json", {
      encoding: "utf8",
    })
  );
};

const getSingleItem = async (id) => {
  const allItems = await getAllItems();
  return allItems.find((item) => item.id === id);
};

const updateItem = async (id, body) => {
  const item = await getSingleItem(id);
  item.title = body.title;
  item.price = body.price;
  console.log(item.title, item.price);
  fs.promises.writeFile("products.json", JSON.stringify(data, null, 2));
  // console.log(item.title);
  return item;
};

//const update =
module.exports = { addProduct, getAllItems, getSingleItem, updateItem };
