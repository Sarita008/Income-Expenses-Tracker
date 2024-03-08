import React from 'react'
import logo from "../../assets/logo.png";
import "./Footer.css"

const Footer = () => {
  return (
   
    <footer className="footer">
    <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="#">About</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>

    </ul>
    <p>&copy;2023 Sarita Sharma | All Rights Reserved</p>
  </footer>
//   <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
//   <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

  )
}

export default Footer;
