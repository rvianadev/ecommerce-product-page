import styles from "./styles.module.css";
import { useCart } from "../../hooks/useCart";

function CartModal() {
  // const { isOpen } = useContext(CartContext);
  const { isOpen } = useCart();

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
