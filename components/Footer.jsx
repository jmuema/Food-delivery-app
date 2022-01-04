import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            <br /> Nairobi, Kenya
            <br /> (254) 7867-1010
          </p>
          <p className={styles.text}>
            <br /> Nairobi, Kenya
            <br /> (254) 867-1011
          </p>
          <p className={styles.text}>

             <br /> Nairobi, Kenya
            <br /> (254) 867-1012
          </p>
          <p className={styles.text}>
            <br /> Nairobi, Kenya
            <br /> (254) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 8:00 – 21:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 8:00 – 21:00
          </p>
        </div>
      </div>
      
    </div>
    
    
  );
};

export default Footer;
