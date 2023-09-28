import React from "react";
import styles from "./FlashSale.module.css";

function FlashSale() {
  const produces = [
    { img: "", name: "", price: "", oldprice: "" },
    { img: "", name: "", price: "", oldprice: "" },
    { img: "", name: "", price: "", oldprice: "" },
    { img: "", name: "", price: "", oldprice: "" },
    { img: "", name: "", price: "", oldprice: "" },
    { img: "", name: "", price: "", oldprice: "" },
  ];
  return (
    <div>
      <div>FlashSale</div>
      <div className={styles.producesContainer}>
        <table>
          <tr style={{ borderBottom: "1pt solid red" }}>Top Row</tr>
          <tr>Bot Row</tr>
        </table>
      </div>
    </div>
  );
}

export default FlashSale;
