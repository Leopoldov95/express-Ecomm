// the main layout for admin product edit

const layout = require("./adminLayout");

// will need to replace the bottom two product.title with product.id

module.exports = (products) => {
  const renderedProducts = products
    .map((product) => {
      return `
            <tr>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>
              <a href="/admin/products/${product.id}/edit">
                <button class="edit-btn">Edit</button>
              </a>
            </td>
            <td>
              <form
                method="POST"
                action="/admin/products/${product.id}/delete"
              >
                <button class="delete-btn">Delete</button>
              </form>
            </td>
          </tr>
        `;
    })
    .join("");

  return layout({
    content: `

      <div class="admin-products-container">
      <div class="admin-products">
        <h1 class="admin-subtitle">Products</h1>
        <a href="/admin/products/new" class="submit-btn">New Product</a>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        ${renderedProducts}
        </tbody>
      </table>
      <div class='admin-signout' >
        <a href='/signout'>Sign Out</a>
      </div>
    </div>
      
      `,
  });
};

/* 

 <div class="admin-edit-container">
        <div class="admin-edit">
          <h1 class="admin-subtitle">Products</h1>
          <a href="/admin/proucts/new" class="submit-btn">New Product</a>
        </div>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <!-- rendered products will go here -->
            <tr>
              <td>AJAX BMX</td>
              <td>$999999</td>
              <td>
                <a href="/admin/products/${product.id}/edit">
                  <button class="edit-btn">Edit</button>
                </a>
              </td>
              <td>
                <form
                  method="POST"
                  action="/admin/products/${product.id}/delete"
                >
                  <button class="delete-btn">Delete</button>
                </form>
              </td>
            </tr>
            <tr>
              <td>AJAX BMX</td>
              <td>$999999</td>
              <td>
                <a href="/admin/products/${product.id}/edit">
                  <button class="edit-btn">Edit</button>
                </a>
              </td>
              <td>
                <form
                  method="POST"
                  action="/admin/products/${product.id}/delete"
                >
                  <button class="delete-btn">Delete</button>
                </form>
              </td>
            </tr>
            <tr>
              <td>AJAX BMX</td>
              <td>$999999</td>
              <td>
                <a href="/admin/products/${product.id}/edit">
                  <button class="edit-btn">Edit</button>
                </a>
              </td>
              <td>
                <form
                  method="POST"
                  action="/admin/products/${product.id}/delete"
                >
                  <button class="delete-btn">Delete</button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

*/
