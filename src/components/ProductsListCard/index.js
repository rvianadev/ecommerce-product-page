import styles from "./styles.module.css";

function ProductsListCard(props) {
  return (
    <div className={styles.productsListCard}>
      <h2>Product {props.productId + 2}</h2>
      <a href={props.url} target="_blank" rel="noreferrer noopener">
        <img src={props.thumbnailUrl} />
      </a>
    </div>
  );
}

export default ProductsListCard;
