import styles from "./styles.module.css";

function ProductsListCard(props) {
  const productId = props.productId + 1;

  return (
    <div className={styles.productsListCard}>
      <h2>Product {productId}</h2>
      <a href={`/product/${productId}`}>
        <img src={props.thumbnailUrl} />
      </a>
    </div>
  );
}

export default ProductsListCard;
