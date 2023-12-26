const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `<div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="" />
        <div class="footer-ul-container">
          <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">tshirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watches</a></li>
          </ul>
          <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">tshirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watches</a></li>
          </ul>
        </div>
      </div>
      <p class="footer-title">about company</p>
      <p class="info">company info, company info, company info, company info</p>
      <p class="info">support emails - help@aloths.com, customersupport@aloths.com</p>
      <p class="info">telephone - 8 800 555 35 35, 8 800 555 35 33</p>
      <div class="footer-social-container">
        <div>
          <a href="#" class="social-link">terms & services</a>
          <a href="#" class="social-link">privacy page</a>
          </div>
      </div>
       <div>
          <a href="#" class="social-link">twitter</a>
          <a href="#" class="social-link">facebook</a>
          <a href="#" class="social-link">instagram</a>
          </div>
      </div>
      <p class="footer-credit">Clothing, Best apparels online store</p>
     `;
};

createFooter();
