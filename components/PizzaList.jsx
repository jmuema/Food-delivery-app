import React from 'react';
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"



const PizzaList = () => {
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
          <p className={styles.desc}>
          We have been serving our customers since 2011. Our clientele has grown since then and we have gone from strength to strength with the support of our loyal customers! <br />
            We are always open to new ideas and new ways to serve our customers. <br />
            select your pizza from the menu, and get your order delivered for free within 30 minutes! 
          </p>
          <div className={styles.wrapper}>
              <PizzaCard/>
              <PizzaCard/>
              <PizzaCard/>
              <PizzaCard/>
              <PizzaCard/>
              <PizzaCard/>
              <PizzaCard/>
              <PizzaCard/>
          </div>
        </div>
      );
    };

export default PizzaList
