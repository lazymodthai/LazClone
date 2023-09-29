import React from "react";
import styles from "./Footer.module.css";
import CardBottomBanner from "./CardBottomBanner";

function Footer() {
  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <CardBottomBanner />
      </div>
    </div>
  );
}

export default Footer;
