import styles from "./styles.module.css";

import logo from "../../assets/images/logo.svg";
import iconCart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";

function Header() {
  return (
    <header className={styles.mainHeader}>
      <menu>
        <nav>
          <img src={logo} alt="logo" className={styles.logo} />
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img src={iconCart} alt="cart" className={styles.cart} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={avatar} alt="user avatar" className={styles.avatar} />
              </a>
            </li>
          </ul>
        </nav>
      </menu>
    </header>
  );
}

export default Header;
