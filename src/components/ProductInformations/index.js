import styles from "./styles.module.css";
import { useState } from "react";

import iconMinus from "../../assets/images/icon-minus.svg";
import iconPlus from "../../assets/images/icon-plus.svg";
import iconCart from "../../assets/images/icon-cart-white.svg";

function ProductInformations() {
  const [amount, setAmount] = useState(0);

  const addProduct = () => {
    if (amount <= 19) {
      setAmount(amount + 1);
    }
  };

  const removeProduct = () => {
    if (amount >= 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <aside className={styles.productInformationsContainer}>
      <div className={styles.productDescription}>
        <span className={styles.descriptionSubtitle}>sneaker company</span>
        <h1 className={styles.productTitle}>Fall Limited Edition Sneakers</h1>
        <p className={styles.descriptionText}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className={styles.productPrice}>
        <span className={styles.price}>$125.00</span>
        <span className={styles.discount}>50%</span>
        <span className={styles.realPrice}>$250.00</span>
      </div>
      <div className={styles.productButtons}>
        <div className={styles.quantityButton}>
          <button
            className={styles.buttonMinus}
            onClick={() => removeProduct()}
          >
            <img src={iconMinus} alt="icon minus" />
          </button>
          <span>{amount}</span>
          <button className={styles.buttonPlus} onClick={() => addProduct()}>
            <img src={iconPlus} alt="icon plus" />
          </button>
        </div>

        <button className={styles.addToCartButton}>
          <img src={iconCart} alt="icon cart" />
          <span>Add to cart</span>
        </button>
      </div>
    </aside>
  );
}

export default ProductInformations;
