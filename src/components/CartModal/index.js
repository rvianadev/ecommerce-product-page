import styles from "./styles.module.css";

function CartModal() {
  return (
    <div className={styles.cartModal}>
      <header className={styles.cartHeader}>
        <span className={styles.cartTitle}>Cart</span>
      </header>
    </div>
  );
}

export default CartModal;
