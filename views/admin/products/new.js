const layout = require("../adminLayout");
module.exports = () => {
  return layout({
    content: `
    <div class="admin-edit">
        <h1 class="subtitle">Create a New Product</h1>

        <form method="POST" enctype="multipart/form-data">
          <div class="field">
            <label class="label">Title</label>
            <input
              class="input"
              placeholder="Title"
              name="title"
            />
          </div>

          <div class="field">
            <label class="label">Price</label>
            <input
              class="input"
              placeholder="Price"
              name="price"
            />
          </div>

          <div class="field">
            <label class="label">Image</label>
            <input type="file" name="image" accept="image/*" />
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
enctype="multipart/form-data"
*/
