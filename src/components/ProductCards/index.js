import styles from "./styles.module.css";

import imageProduct1 from "../../assets/images/image-product-1.jpg";
import imageProduct2 from "../../assets/images/image-product-2.jpg";
import imageProduct3 from "../../assets/images/image-product-3.jpg";
import imageProduct4 from "../../assets/images/image-product-4.jpg";

import imageProduct1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "../../assets/images/image-product-4-thumbnail.jpg";

function ProductCards() {
  const showLargeImage = (image) => {
    const container = document.getElementById(styles.largeImageContainer);

    container.innerHTML = "<img src='" + image + "' alt='large product image'>";
  };

  return (
    <article className={styles.productCardsContainer}>
      <div id={styles.largeImageContainer}>
        <img src={imageProduct1} alt="Large product image" />
      </div>
      <div className={styles.thumbnailsContainer}>
        <a href="#" onClick={() => showLargeImage(imageProduct1)}>
          <img src={imageProduct1Thumbnail} alt="Sneaker thumbnail 1" />
        </a>
        <a href="#" onClick={() => showLargeImage(imageProduct2)}>
          <img src={imageProduct2Thumbnail} alt="Sneaker thumbnail 2" />
        </a>
        <a href="#" onClick={() => showLargeImage(imageProduct3)}>
          <img src={imageProduct3Thumbnail} alt="Sneaker thumbnail 3" />
        </a>
        <a href="#" onClick={() => showLargeImage(imageProduct4)}>
          <img src={imageProduct4Thumbnail} alt="Sneaker thumbnail 4" />
        </a>
      </div>
    </article>
  );
}

export default ProductCards;
