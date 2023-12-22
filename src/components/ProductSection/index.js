import styles from "./styles.module.css";

import imageProduct1 from "../../assets/images/image-product-1.jpg";
import imageProduct2 from "../../assets/images/image-product-2.jpg";
import imageProduct3 from "../../assets/images/image-product-3.jpg";
import imageProduct4 from "../../assets/images/image-product-4.jpg";

import imageProduct1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "../../assets/images/image-product-4-thumbnail.jpg";

function ProductSection() {
  return (
    <section className={styles.productSection}>
      <article className={styles.productCardsContainer}>
        <div className={styles.largeImageContainer}>
          <img src={imageProduct1} alt="Sneaker photo 1" />
        </div>
        <div className={styles.thumbnailsContainer}>
          <img src={imageProduct1Thumbnail} alt="Sneaker thumbnail 1" />
          <img src={imageProduct2Thumbnail} alt="Sneaker thumbnail 2" />
          <img src={imageProduct3Thumbnail} alt="Sneaker thumbnail 3" />
          <img src={imageProduct4Thumbnail} alt="Sneaker thumbnail 4" />
        </div>
      </article>
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
        <div className={styles.productButtons}></div>
      </aside>
    </section>
  );
}

export default ProductSection;
