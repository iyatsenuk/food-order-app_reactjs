import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <h1>Delicious Food, Delivered To You</h1>
        <p className={styles["middle-text"]}>
          Choose your favorite meal from our broad selection of abailable meals
          and enjoy delicious lunch or dinner at home.
        </p>

        <p className={styles["bottom-text"]}>
          All our meals are cooked with high-quality ingridients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </>
  );
};

export default Banner;
