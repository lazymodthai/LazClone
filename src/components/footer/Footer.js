import React from "react";
import styles from "./Footer.module.css";
import CardBottomBanner from "./CardBottomBanner";
import FooterFirst from "./FooterFirst";
import FooterSecond from "./FooterSecond";

function Footer() {
  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <CardBottomBanner />
        <FooterFirst />
      </div>
      <FooterSecond/>
    </div>
  );
}

export default Footer;
