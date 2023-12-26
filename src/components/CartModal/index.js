import { useContext, useState } from "react";
import styles from "./styles.module.css";
import { CartContext } from "../../contexts/Cart";

function CartModal() {
  const isActive = useContext(CartContext);

  const [showModal, setShowModal] = useState(isActive);
  console.log(showModal);

  return (
    <div className={styles.cartModal}>
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
