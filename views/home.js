const layout = require("./layout");

module.exports = () => {
  return layout({
    content: `
        <div id="home">
          <h1>Let us take you on your next adventure</h1>
          <a class="home-btn" href="/bikes">See our Bikes!</a>
        </div>
        `,
  });
};
