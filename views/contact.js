const layout = require("./layout");

module.exports = () => {
  return layout({
    content: `
    <div id="contact">
      <h3>
        Contact us if you have any comments or questions about our products. We
        value your feedback.
      </h3>
      <form
        class="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div class="form-border">
          <i class="far fa-user"> </i>
          <input
            class="form-text"
            type="text"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div class="form-border">
          <i class="far fa-envelope"> </i>
          <input
            class="form-text"
            type="email"
            name="email"
            placeholder="Your Email Adress"
          />
        </div>
        <textarea
          class="form-area"
          name="text"
          placeholder="How Can we Help?"
        ></textarea>
        <button class="submit-btn" type="submit">
          <i class="far fa-paper-plane"> </i>Send Mail
        </button>
      </form>
      <footer>
      <p>You can also reach us by phone or email</p>
      <p><i class="fa fa-phone"></i>+1 555 987 6543</p>
      <p><i class="fa fa-envelope"></i> contact@myshop.com</p>
      </footer>
    </div>
    `,
  });
};
