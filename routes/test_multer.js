const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const helperView = require("../views/test_multer");
const { addProduct } = require("../controllers/main");

// set storage engine

const storage = multer.diskStorage({
  destination: "./public/images/products",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// multer options / Upload variable
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100000000000,
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("image"); // the name for the file uload input field

// check file type
function checkFileType(file, cb) {
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
}

// can use res.json if I don't have postman installed
router.get("/helper", (req, res) => {
  //res.json({ message: "WELCOME" });
  res.send(helperView("huffy.jpeg"));
});

router.post("/helper/upload", (req, res) => {
  //console.log(req.body);
  upload(req, res, (err) => {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any

    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("Please select an image to upload");
    } else if (err instanceof multer.MulterError) {
      return res.send(err);
    } else if (err) {
      return res.send(err);
    }

    // Display uploaded image for user validation
    res.send(
      `You have uploaded this image: <hr/>
      <h1>${req.body.title}</h1>
      <h3>${req.body.price}</h3>
      <img src="/images/products/${req.file.filename}" width="500" /
      ><hr />
      <a href="./">Upload another image</a>`
      // helperView(req.file.filename)
    );

    /* if (err) {
      res.send(helperView(err.message));
      //console.log(err.message);
      // this is the error msg that wl get passed to the template
    } else {
      // check if a file has been selected
      if (req.file === undefined) {
        res.send(helperView("Error: no file selected!"));
      } else {
        res.send(helperView, {
          msg: "file upload!",
          file: `products/${req.file.filename}`,
        });
      }
    } */
  });
});

// Show a image from the public directory
router.get("/test", (req, res) => {
  res.send(`
  <img src="/images/products/huffy.jpeg" width="500px" />
  `);
});

// display information from the JSON file

router.get("/test/display", (req, res) => {
  res.send(`
  <h1>${display.title}</h1>
  <h3>${display.price}</h3>
  <img src="/images/products/${display.img}" width="500px" />"
  `);
});
module.exports = router;
