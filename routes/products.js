const express = require("express");
const router = express.Router();
const { getAllItems } = require("../controllers/main");
const viewProducts = require("../views/products");
/* 
const products = await productsRepo.getAll();
  res.send(productsIndexTemplate({ products })); */
// so the issue was that i wasn"t setting the route as async, thus why i kept getting an unfullfilled promise
router.get("/bikes", async (req, res) => {
  const products = await getAllItems();
  // console.log(getAllItems());
  res.send(viewProducts(products));
});

module.exports = router;
