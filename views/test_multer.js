const layout = require("./layout");

module.exports = (img) => {
  return layout({
    content: `
    <p></p>
        <form action="/helper/upload" enctype="multipart/form-data" method="POST">
        <input type='text' name='title' placeholder="Enter new Item" />
        <input type='text' name='price' placeholder="Enter new Price"/>
          <input type="file" name="productImage" accept="image/*" />
          <input type="submit" value="Create New Item" />
        </form>

        <br>

        <img src=images/products/${img} />
        `,
  });
};

//
