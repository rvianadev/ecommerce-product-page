import styles from "./styles.module.css";

function ProductsListWrapper({ children }) {
  return <div className={styles.productListWrapper}>{children}</div>;
}

export default ProductsListWrapper;
