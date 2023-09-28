import React from "react";
import { v1 as uuidv1 } from "uuid";
import styles from "./Mods.module.css";

function Mods() {
  const modItem = [
    {
      icon: "https://icms-image.slatic.net/images/ims-web/9d78cd14-05ee-43ba-a360-61f895a70aef.png",
      text: "LazMall",
    },
    {
      icon: "https://laz-img-cdn.alicdn.com/images/ims-web/TB12wVshUT1gK0jSZFhXXaAtVXa.png",
      text: "คูปองลดเพิ่ม",
    },
    {
      icon: "https://laz-img-cdn.alicdn.com/images/ims-web/TB11DFthO_1gK0jSZFqXXcpaXXa.png",
      text: "เติมเงิน&ดีลอาหาร",
    },
    {
      icon: "https://icms-image.slatic.net/images/ims-web/8290da02-ba89-4ade-96e3-88de6b72acd0.png",
      text: "LazBlog",
    },
    {
      icon: "https://img.alicdn.com/imgextra/i1/O1CN01yvjCS71LsB10MJoJt_!!6000000001354-2-tps-150-150.png",
      text: "ร้านค้าแนะนำ",
    },
  ];
  return (
    <div className={styles.container}>
      {modItem.map((i) => (
        <div key={uuidv1()} className={styles.card}>
          <img src={i.icon} alt={i.text} className={styles.icon}/>
          <span className={styles.modText}>{i.text}</span>
        </div>
      ))}
    </div>
  );
}

export default Mods;
