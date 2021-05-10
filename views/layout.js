module.exports = ({ content }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rydle's Cycles</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="/css/app.css" />
    <link rel="stylesheet"href="/css/all.css" />
    <link rel="stylesheet"href="/css/utilities.css" />
  </head>
  <body>
    <nav class="navbar">
      <div class="navbar-left">
        <ul>
          <i class="fas fa-bicycle"></i
          ><span>Rydel's Cycles</span>
          <a href="/" class="navbar-link"><li>Home</li></a>
          <a href="/bikes" class="navbar-link"><li>Bikes</li></a>
          <a href="/contact" class="navbar-link"><li>Contact</li></a>
        </ul>
      </div>

      <div class="navbar-mid">
        <ul class="social">
          <li><a href=""><i class="fab fa-facebook"></i></a></li>
          <li><a href=""><i class="fab fa-twitter"></i></a></li>
          <li><a href=""><i class="fab fa-linkedin"></i></a></li>
          <li><a href=""><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>

      <div class="navbar-right">
        <a href="/admin/products"><i class="fas fa-user-shield"></i></a>
        <a href="/login"><i class="far fa-user"></i></a>
        <a href="/cart"><i class="fas fa-shopping-cart"></i></a>
      </div>
    </nav>
    ${content}
  </body>
</html>
      `;
};
