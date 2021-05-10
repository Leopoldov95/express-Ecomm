const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const adminProductView = require("../../views/admin/listProducts");
const newProductView = require("../../views/admin/products/new");
const editProductView = require("../../views/admin/products/edit");
const { requireAuth } = require("../../controllers/users");
const {
  getAllItems,
  addProduct,
  getSingleItem,
} = require("../../controllers/main");

/* MULTER CONFIG */
/* file.fieldname + "-" + Date.now() + path.extname */
/* const storage = multer.diskStorage({
  destination: "./public/images/products",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
}); */
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10000000,
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// multer options / Upload variable
/* const upload = multer({
  storage: storage,

}).single("image"); // the name for the file uload input field */

// check file type
const checkFileType = (file, cb) => {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png/;
  // check the extension
  const extname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  ); // test() compares the filenam to the reg ex
  //ceck MIME type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images only!");
  }
};

router.get("/admin/products", requireAuth, async (req, res) => {
  const products = await getAllItems();
  res.send(adminProductView(products));
});

router.get("/admin/products/new", requireAuth, (req, res) => {
  res.send(newProductView());
});

router.post(
  "/admin/products/new",
  requireAuth,
  upload.single("image"),
  async (req, res) => {
    //res.send("you have created a new item");
    const image = req.file.buffer.toString("base64"); // 'base64' can safely show the img in a string format
    const { title, price } = req.body;
    await addProduct({ title, price, image });
    res.redirect("/admin/products");
    //console.log(image);
    /*   upload(req, res, (err) => {
    //console.log(req.body);
    //console.log(req.file);
    addProduct(req);
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    } else if (err instanceof multer.MulterError) {
      return res.send(err);
    } else if (err) {
      return res.send(err);
    }
  }); */
  }
);

router.get("/admin/products/:id/edit", requireAuth, async (req, res) => {
  const product = await getSingleItem(req.params.id); // this will capture the id of the selected product upon clicking 'edit'

  if (!product) {
    return res.send("Product not found");
  }

  res.send(editProductView(product));
});

module.exports = router;
