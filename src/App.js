import styles from "./App.module.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import CartLogo from "./images/Cart-logo.png";
import Menu from "./components/Menu/Menu";
import { useEffect, useRef, useState } from "react";

function App() {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      title: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      amount: Number(1),
    },
    {
      id: 2,
      title: "Schnitzel",
      description: "A German speciality",
      price: 16.5,
      amount: Number(1),
    },
    {
      id: 3,
      title: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      amount: Number(1),
    },
    {
      id: 4,
      title: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      amount: Number(1),
    },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const [cartStatus, setCartStatus] = useState(false);

  const [triggerAnimation, setTriggerAnimation] = useState(true);

  useEffect(() => {
    setTriggerAnimation(true);

    const timer = setTimeout(() => {
      setTriggerAnimation(false);
    }, 400);
  }, [cartItems]);

  const cartClasses = triggerAnimation
    ? `${styles["jello-horizontal"]} ${styles.cart}`
    : styles.cart;

  const onAddOneItem = (product) => {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id
          ? { ...product, amount: product.amount + parseInt(1) }
          : x
      )
    );
  };
  const onRemoveOneItem = (product) => {
    setCartItems(
      cartItems.map((x) =>
        x.id === product.id
          ? { ...product, amount: product.amount - parseInt(1) }
          : x
      )
    );
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? { ...exist, amount: Number(x.amount) + Number(product.amount) }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product }]);
    }
  };

  const onChangeAmount = (newamount, product) => {
    setMenuItems(
      menuItems.map((x) =>
        x.id === product.id ? { ...product, amount: newamount } : x
      )
    );
  };

  const onCartStatusChanger = () => {
    setCartStatus(!cartStatus);
  };

  const totalOrdersAmount = (cartItems) => {
    let totalOrders = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalOrders = parseInt(totalOrders) + parseInt(cartItems[i].amount);
    }
    return totalOrders;
  };

  let item = cartItems.find((x) => x.amount === 0);
  if (item !== undefined) {
    setCartItems(cartItems.filter((x) => x.amount > 0));
  }

  // const onAdd = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };

  return (
    <>
      <header className={styles.header}>
        <div className={styles["header-container"]}>
          <div className={styles.logo}>ReactMeals</div>
          <div
            className={cartClasses}
            onClick={() => {
              onCartStatusChanger();
            }}
          >
            <img src={CartLogo} alt="logo"></img>
            Your cart
            <div className={styles["order-counter"]}>
              {totalOrdersAmount(cartItems)}
            </div>
          </div>
        </div>
      </header>

      {cartStatus && (
        <Cart
          onAddOneItem={onAddOneItem}
          onRemoveOneItem={onRemoveOneItem}
          cartItems={cartItems}
          onCartStatusChanger={onCartStatusChanger}
        />
      )}

      <Banner />
      <Menu
        onChangeAmount={onChangeAmount}
        onAdd={onAdd}
        menuItems={menuItems}
      />
    </>
  );
}

export default App;
