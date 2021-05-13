const express = require("express");
const router = express.Router();
const viewCart = require("../views/cart");
const {
  addProduct,
  getAllItems,
  getSingleItem,
  updateItem,
} = require("../controllers/main");

router.post("/cart/products", async (req, res) => {
  let cart; // create empty cart variable

  if (!req.session.cartId) {
    // we dont have a cart, we need to create one
    // and store the cart id on the req.session.cartId property
    cart = await addProduct({ items: [] }, "cart.json");
  }
});

module.exports = router;
