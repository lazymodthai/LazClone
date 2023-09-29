import React from "react";
import styles from "./LazMall.module.css";
import LazMallCard from "./LazMallCard";

function LazMall() {
  const products = [
    { img: "https://lzd-img-global.slatic.net/live/th/p/c3dd342c4d49106768fbbf8886dd10f8.jpg_200x200q80.jpg_.webp", shopImg: "https://lzd-img-global.slatic.net/g/shop/d002c3e9c782a1bf69d8e6dd2afdfa7a.jpeg_80x80q80.jpg_.webp", shopName: "CB Cotton", slogan: "Make Sleep Comfort" },
    { img: "https://lzd-img-global.slatic.net/g/p/bd0ec6b02eea92d7febc6524978a5a17.png_200x200q80.jpg_.webp", shopImg: "https://lzd-img-global.slatic.net/g/shop/f40921ecae632345d4c35fb34922109b.jpeg_80x80q80.jpg_.webp", shopName: "CORRETTO SUITE", slogan: "CORRETTO SUITE" },
    { img: "https://lzd-img-global.slatic.net/live/th/p/oem-billiard-cue-shaft-cleaner-magic-show-pro-red-0933-0192131-1.jpg_200x200q80.jpg_.webp", shopImg: "https://lzd-img-global.slatic.net/g/shop/8178b9685b92006eb4a87e67456e7880.png_80x80q80.jpg_.webp", shopName: "Thailand Pool Tables", slogan: "Thailand Pool Tables" },
    { img: "https://lzd-img-global.slatic.net/live/th/p/8ad645497465e9d1afbedbb705553b12.jpg_200x200q80.jpg_.webp", shopImg: "https://lzd-img-global.slatic.net/g/shop/fc652be53505aa758de3032fb7949a5f.jpeg_80x80q80.jpg_.webp", shopName: "IN2IT", slogan: "Enjoy Calourful Life" },
    { img: "https://lzd-img-global.slatic.net/live/th/p/2a9b346d13d0ff9d9cbb4981dc63a8aa.jpg_200x200q80.jpg_.webp", shopImg: "https://lzd-img-global.slatic.net/g/shop/eec6f084a0a7affbf2d263895a1326c7.png_80x80q80.jpg_.webp", shopName: "Toy Smart Shop", slogan: "ของเล่นและเกม" },
    { img: "https://lzd-img-global.slatic.net/g/p/393dfdd48ef0aeefdd9b285a870c1ed2.jpg_200x200q80.jpg_.webp", shopImg: "https://lzd-img-global.slatic.net/g/ot/shop/0445de6c47bc482885e58ac8de2a8b09.png_80x80q80.jpg_.webp", shopName: "ด็กเกอร์รี่", slogan: "ด็อกเกอร์รี่" },
  ];
  return (
    <div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>LazMall</div>
        <span className={styles.shopMore}>เลือกซือสินค้าต่อ {">"}</span>
      </div>

      <div className={styles.lazMallCardContainer}>
        {products.map((i) => (
          <LazMallCard
            img={i.img}
            shopImg={i.shopImg}
            shopName={i.shopName}
            slogan={i.slogan}
          />
        ))}
      </div>
    </div>
  );
}

export default LazMall;
