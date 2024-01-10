import styles from "./styles.module.css";

import productImage from "../../assets/images/image-product-1.jpg";

function SneakerCard() {
  return (
    <div className={styles.sneakerCard}>
      <h2>Sneaker</h2>

      <a href="/product/sneaker">
        <img src={productImage} />
      </a>
    </div>
  );
}

export default SneakerCard;
