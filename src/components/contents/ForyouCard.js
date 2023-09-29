import React from "react";
import styles from "./Foryou.module.css";
import { AiFillStar } from "react-icons/ai";
function ForyouCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={styles.cardTextBlock}>


        <div className={styles.cardName}><span>
        {props.payday ? (
          <img
              className={styles.payday}
            src="https://lzd-img-global.slatic.net/g/gcp/lazada/42d6b48e-509b-458c-b1d6-4f0714b0a0ed_ALL-72-36.png#width=72&height=36"
            alt="payday"
          />
        ) : (
          ""
        )}
      </span>{props.name}</div>
        <div className={styles.cardPrice}>฿{props.price}</div>
        <div className={styles.cardOldPrice}>฿{props.oldprice}</div>
        <div className={styles.cardSale}>{props.sale}</div>
        <div className={styles.starsContainer}>
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <div className={styles.comment}>({props.comment})</div>
        </div>
      </div>
    </div>
  );
}

export default ForyouCard;
