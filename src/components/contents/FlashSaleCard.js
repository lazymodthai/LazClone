import React from "react";
import styles from "./FlashSale.module.css";

function FlashSaleCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={styles.cardTextBlock}>
        <div className={styles.cardName}>{props.name}</div>
        <div className={styles.cardPrice}>฿{props.price}</div>
        <div className={styles.cardOldPrice}>฿{props.oldprice}</div>
        <div className={styles.cardSale}>{props.sale}</div>
      </div>
    </div>
  );
}

export default FlashSaleCard;
