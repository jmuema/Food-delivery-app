import React from 'react'
import styles from "../styles/Cart.module.css";
import Image from "next/image";

const cart = () => {
    return (
        <div className={styles.container}>
          <div className={styles.left}>
            <table className={styles.table}>
              <tr className={styles.trTitle}>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/img/pizza.png"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>CORALZO</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double ingredient, spicy sauce
                  </span>
                </td>
                <td>
                  <span className={styles.price}>Ksh 900</span>
                </td>
                <td>
                  <span className={styles.quantity}>2</span>
                </td>
                <td>
                  <span className={styles.total}>Ksh 1800</span>
                </td>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/img/pizza.png"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>CORALZO</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double ingredient, spicy sauce
                  </span>
                </td>
                <td>
                  <span className={styles.price}>Ksh 500</span>
                </td>
                <td>
                  <span className={styles.quantity}>2</span>
                </td>
                <td>
                  <span className={styles.total}>Ksh 1000</span>
                </td>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/img/pizza.png"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>CORALZO</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double ingredient, spicy sauce
                  </span>
                </td>
                <td>
                  <span className={styles.price}>Ksh 1200</span>
                </td>
                <td>
                  <span className={styles.quantity}>2</span>
                </td>
                <td>
                  <span className={styles.total}>Ksh 2400</span>
                </td>
              </tr>
            </table>
          </div>
          <div className={styles.right}>
            <div className={styles.wrapper}>
              <h2 className={styles.title}>CART TOTAL</h2>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>Ksh 5200
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>Ksh 0
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>Ksh 5200
              </div>
              <button className={styles.button}>CHECKOUT NOW!</button>
            </div>
          </div>
        </div>
      );
    };

export default cart
