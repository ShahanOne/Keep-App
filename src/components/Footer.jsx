import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} <a className="footer-name" href="https://shahanone.github.io/Shahan_One/">Syed Shahan Hussain </a></p>
    </footer>
  );
}

export default Footer;
