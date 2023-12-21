import styles from "./styles.module.css";

function ProductSection() {
  return (
    <section className={styles.productSection}>
      <article className={styles.productCards}></article>
      <aside className={styles.productInformations}></aside>
    </section>
  );
}

export default ProductSection;
