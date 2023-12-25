import styles from "./styles.module.css";
import ProductCards from "../ProductCards";
import ProductInformations from "../ProductInformations";

function ProductSection() {
  return (
    <section className={styles.productSection}>
      <ProductCards />
      <ProductInformations />
    </section>
  );
}

export default ProductSection;
