import React from "react";
import Mods from "./Mods";
import styles from "./Content.module.css";
import FlashSale from "./FlashSale";
import LazMall from "./LazMall";
import Catagories from "./Catagories";
import Foryou from "./Foryou";
import LoadMore from "./LoadMore";

function Content() {
  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <Mods />
        <FlashSale />
        <LazMall />
        <Catagories />
        <Foryou />
        <LoadMore />
      </div>
    </div>
  );
}

export default Content;
