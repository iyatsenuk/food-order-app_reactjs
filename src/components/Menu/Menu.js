import styles from "./Menu.module.css";
import MenuItem from "./MenuItem/MenuItem";

const Menu = (props) => {
  return (
    <>
      <div className={styles.menu}>
        <ul>
          {props.menuItems.map((item) => (
            <MenuItem
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              amount={item.amount}
              onAdd={props.onAdd}
              onChangeAmount={props.onChangeAmount}
              item={item}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
