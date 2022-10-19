import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItemsAmount = (cartItems) => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total =
        parseFloat(total) +
        parseFloat(cartItems[i].price * parseInt(cartItems[i].amount));
    }
    return total.toFixed(2);
  };

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.cart}>
          {props.cartItems.length !== 0 ? (
            <ul>
              {props.cartItems.map((item) => (
                <li key={item.id} className={styles["cart-item"]}>
                  <div className={styles["left-block"]}>
                    <div className={styles["item-title"]}>{item.title}</div>
                    <div className={styles["price-amount"]}>
                      <div className={styles.price}>${item.price}</div>
                      <div className={styles.amount}>x {item.amount}</div>
                    </div>
                  </div>
                  <div className={styles["right-block"]}>
                    <div
                      className={styles.minus}
                      onClick={() => {
                        props.onRemoveOneItem(item);
                      }}
                    >
                      -
                    </div>
                    <div
                      className={styles.plus}
                      onClick={() => {
                        props.onAddOneItem(item);
                      }}
                    >
                      +
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles["empty-message"]}>The cart is empty</div>
          )}

          <div className={styles["total-amount__container"]}>
            <div className={styles["total-amount__title"]}>Total Amount</div>
            <div className={styles["total-amount__price"]}>
              {`$${cartItemsAmount(props.cartItems)}`}
            </div>
          </div>

          <div className={styles["cart-buttons"]}>
            <div
              className={styles["close-button"]}
              onClick={props.onCartStatusChanger}
            >
              Close
            </div>
            <div
              className={styles["order-button"]}
              onClick={() => {
                console.log("Ordering...");
              }}
            >
              Order
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
