const layout = require("../adminLayout");
//const { getError } = require("../../helpers");
//{errors}
/* 
${getError(errors, "email")}
${getError(errors, "password")}
*/
module.exports = () => {
  return layout({
    content: `
        <div class="admin-signin">
        <form method="POST">
          <h1>Admin Signin</h1>
          <div class="field">
            <label class="label">Email</label>
            <input
              required
              class="input"
              placeholder="Enter your Email"
              name="email"
              type="email"
            />
            <!-- will want to display error message here -->
            <p class='error-msg'></p>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <input
              required
              class="input"
              placeholder="Password"
              name="password"
              type="password"
            />
            <!-- will want to display error message here -->
            <p class='error-msg'></p>
          </div>
          <button class="submit-btn">
            <i class="fas fa-user-shield"></i>Login
          </button>
        </form>
        <a class="p-1" href="/signup">Need an account? Sign Up</a>
      </div>
        `,
  });
};
