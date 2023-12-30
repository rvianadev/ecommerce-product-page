import styles from "./styles.module.css";

function ProductListWrapper({ children }) {
  return <div className={styles.productListWrapper}>{children}</div>;
}

export default ProductListWrapper;
