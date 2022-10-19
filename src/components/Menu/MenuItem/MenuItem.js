import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <li className={styles["menu-block"]}>
      <div className={styles["left-part"]}>
        <div className={styles.name}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price}</div>
      </div>
      <div className={styles["right-part"]}>
        <div className={styles["right-part__top-part"]}>
          <div className={styles.amount}>Amount</div>
          <input
            onChange={(e) => props.onChangeAmount(e.target.value, props.item)}
            type="number"
            value={props.amount}
            min={1}
          ></input>
        </div>
        <button
          onClick={() => props.onAdd(props.item)}
          type="submit"
          className={styles["add-button"]}
        >
          +Add
        </button>
      </div>
    </li>
  );
};

export default MenuItem;
