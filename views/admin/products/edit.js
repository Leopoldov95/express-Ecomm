const layout = require("../adminLayout");
module.exports = (product) => {
  return layout({
    content: `
    <div class="admin-edit">
        <h1 class="subtitle">Edit a Product</h1>

        <form method="POST" enctype="multipart/form-data">
          <div class="field">
            <label class="label">Title</label>
            <input
              value="${product.title}"
              class="input"
              name="title"
            />
          </div>

          <div class="field">
            <label class="label">Price</label>
            <input
              value="${product.price}"
              class="input"
              name="price"
            />
          </div>

          <div class="field">
            <label class="label">Image</label>
            <input type="file" name="image" />
          </div>
          <br />
          <button class="submit-btn">Submit</button>
        </form>
        
 
        
      </div>
    `,
  });
};
/* 
 <p class="help is-danger">${getError(errors, "title")}</p>
 <p class="help is-danger">${getError(errors, "price")}</p>

*/
