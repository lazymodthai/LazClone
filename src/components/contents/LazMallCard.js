import React from "react";
import styles from "./LazMall.module.css";

function LazMallCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgBox}>
        <div className={styles.cardImg}>
          <img src={props.img} alt={props.shopname} />
        </div>
      </div>

      <div className={styles.shopImg}>
        <img src={props.shopImg} alt={props.shopname} />
      </div>

      <div className={styles.cardTextBox}>
        <div className={styles.shopName}>{props.shopName}</div>
        <div className={styles.slogan}>{props.slogan}</div>
      </div>
    </div>
  );
}

export default LazMallCard;
