import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>Ksh 1,900</span>
      <p className={styles.desc}>
      Freshly Baked Bread, Covered with Cheese and Topped with Italian Spices 
      </p>
    </div>
  );
};

export default PizzaCard;
