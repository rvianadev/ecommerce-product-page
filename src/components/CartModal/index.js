import styles from "./styles.module.css";
import { CartContext } from "../../contexts/Cart";
import { useContext } from "react";

function CartModal() {
  const { isOpen } = useContext(CartContext);

  return (
    <div
      className={styles.cartModal}
      style={isOpen ? { display: "block" } : { display: "none" }}
    >
      <header className={styles.cartHeader}>
        <span className={styles.cartTitle}>Cart</span>
      </header>
      <div className={styles.cartItems}>
        <span>Your cart is empty.</span>
      </div>
    </div>
  );
}

export default CartModal;
