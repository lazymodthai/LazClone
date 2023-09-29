import React from "react";
import styles from "./FlashSale.module.css";
import FlashSaleCard from "./FlashSaleCard";

function FlashSale() {
  const products = [
    { img: "https://lzd-img-global.slatic.net/g/p/6f810bf9034fa45ece3ff146b656547f.jpg_200x200q80.jpg_.webp", name: "โทรคัพท์ OPPQ A74 เครื่องใหม่ 6.7 นิ้วHD 5G Dual Sim smartphone(Ram16G + Rom512G)โทรศัพท์มือถือราคาถูก Android11.0 รองรับภาษาไทย ระบบนำทาง GPS มือถือแรงๆ เหมาะสำหรับ Facebook Line Youtube", price: 873.27, oldprice: 2399 },
    { img: "https://lzd-img-global.slatic.net/g/p/6b07107791ae81cef709994c2cdbe044.jpg_200x200q80.jpg_.webp", name: "PING STUDIOS หมวกบักเก็ตคาวบอยจดหมายหมวกกันแดดหมวกยีนส์", price: 154, oldprice: 390 },
    { img: "https://lzd-img-global.slatic.net/g/p/59ecbc98ab740a4918e7af3374e0aa85.jpg_200x200q80.jpg_.webp", name: "รองเท้า keen uneek รองเท้ากันน้ำ - รองเท้าแตะแบบลำลอง รองเท้ากีฬาชาย / รองเท้าผ้าใบผู้หญิง รองเท้า คีน แท้ รุ่นฮิต รองเท้าแท้ keen แท้ Keen Thailand", price: "900.78", oldprice: "4550" },
    { img: "https://lzd-img-global.slatic.net/g/p/a5289d15d1ad81575e225a5daf8ce5f4.jpg_200x200q80.jpg_.webp", name: "YONUO ชั้นวางของติดผนัง ชั้นติดผนัง ชั้นวางติดผนัง ชั้นติดผนังในห้องน้ํา แผ่นวางของติดผนัง ใช้วางของใช้ ตกแต่งผนังได้ไม่ต้องเจาะ ดีไซน์สวย", price: "219", oldprice: "422" },
    { img: "https://lzd-img-global.slatic.net/g/p/980b0f133f918d628ea165b2b11a99fd.jpg_200x200q80.jpg_.webp", name: "Hamilton Store เสื่อสุขภาพ หมอนรองหลัง หมอนสํานักงาน เบาะรองเอวสําหรับเก้าอี้ด้านหลัง หมอนเมมโมรี่โฟม พนักพิงรองรับเอว เสื่อการ์ตู", price: "308", oldprice: "576" },
    { img: "https://lzd-img-global.slatic.net/g/p/b66876199e8dec1027940b3c784b806e.jpg_200x200q80.jpg_.webp", name: "You Pin Home แห้ง ส่วนผสม ผลไม้อบแห้งขนมราคาส่งถูกๆขนมที่ดังในtiktokมาม่าเกาหลีขนมสตรอว์เบอร์รี่อบแห้ง", price: "106", oldprice: "203" },
  ];
  function Calc(now,old){
    return ((old-now)/old)*100
  }
  return (
    <div>
      <div className={styles.title}>FlashSale</div>
      <div className={styles.productsContainer}>
        <div className={styles.header}>
          <div className={styles.status}>ขณะนี้ลดราคาอยู่</div>
        </div>
        <div className={styles.content}>
          {products.map((i) => (
            <FlashSaleCard
              img={i.img}
              name={i.name}
              price={i.price.toLocaleString(undefined, {minimumFractionDigits: 2})}
              oldprice={i.oldprice.toLocaleString(undefined, {minimumFractionDigits: 2})}
              sale={'-'+Calc(i.price,i.oldprice).toFixed(0)+'%'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlashSale;
