import React from "react";
import CatagoryCard from "./CatagoryCard";
import styles from './Catagories.module.css'

function Catagories() {
  const catagories = [
    { img: "https://lzd-img-global.slatic.net/g/p/272e878a7070ed68813cb35a054fb6fa.jpg_80x80q80.jpg_.webp", cataName: "โทรศัพท์มือถือ" },
    { img: "https://lzd-img-global.slatic.net/g/p/e383fa292386ac3e12782fd599e4d4c8.jpg_80x80q80.jpg_.webp", cataName: "ไฟภายนอกอาคาร" },
    { img: "https://lzd-img-global.slatic.net/g/p/31d41a45d9e0279ef3c66448c80384c2.jpg_80x80q80.jpg_.webp", cataName: "อุปกรณ์วงจรไฟฟ้า และอะไหล่" },
    { img: "https://lzd-img-global.slatic.net/g/p/e0c563e1c123fca92139c6fcea3ef930.jpg_80x80q80.jpg_.webp", cataName: "แท็บเล็ต" },
    { img: "https://lzd-img-global.slatic.net/g/p/f75409a25faee7dd4fe56384adf9742a.jpg_80x80q80.jpg_.webp", cataName: "กล่องเก็บของ และตะกร้า" },
    { img: "https://lzd-img-global.slatic.net/g/p/a1282f2309d6940afb920994422689d7.jpg_80x80q80.jpg_.webp", cataName: "สายชาร์จ & อุปกรณ์ชาร์จไฟ" },
    { img: "https://lzd-img-global.slatic.net/g/p/96295d065f0d837d6fc563b5dc75b4b1.png_80x80q80.jpg_.webp", cataName: "พรรณไม่, เมล็ดพันธุ์ และหลอดไฟ" },
    { img: "https://lzd-img-global.slatic.net/g/p/2b31fa6084a0a1ad92ccced8385142db.png_80x80q80.jpg_.webp", cataName: "แบตเตอรี่ไฟฟ้า" },
    { img: "https://lzd-img-global.slatic.net/g/p/c9ac6e487b56d08f6533618788dc4079.jpg_80x80q80.jpg_.webp", cataName: "เคสและซองมือถือ" },
    { img: "https://lzd-img-global.slatic.net/g/p/48823fa35785488d7d7348100caba158.jpg_80x80q80.jpg_.webp", cataName: "รถและเครื่องตัดหญ้า" },
    { img: "https://lzd-img-global.slatic.net/g/p/437448084f48e04b807e1f5c88149b8d.jpg_80x80q80.jpg_.webp", cataName: "ลำโพงไร้สาย และบลูทูธ" },
    { img: "https://lzd-img-global.slatic.net/g/p/33e6dd949f4db27f5356a17851ba99a3.jpg_80x80q80.jpg_.webp", cataName: "เตียงนอน" },
    { img: "https://lzd-img-global.slatic.net/g/p/f9078f65cd2c7c79e74907e6bd003bce.jpg_80x80q80.jpg_.webp", cataName: "เสื้อยืดผู้ชาย" },
    { img: "https://lzd-img-global.slatic.net/g/p/4d209943975ddb0fe1af8461387efee6.jpg_80x80q80.jpg_.webp", cataName: "จอคอมพิวเตอร์" },
    { img: "https://lzd-img-global.slatic.net/g/p/e6aeb0cd5a236d884f39220dda95427e.jpg_80x80q80.jpg_.webp", cataName: "หูฟังแบบสอดหู" },
    { img: "https://lzd-img-global.slatic.net/g/ff/kf/Se1c15844a8034f4ba64bbec907507b0de.jpg_80x80q80.jpg_.webp", cataName: "เครื่องมือสำหรับซิมการ์ด" },
  ];
  return (
    <div>
      <div className={styles.title}>หมวดหมู่</div>

      <div className={styles.cardContainer}>
        {catagories.map(i=><CatagoryCard key={i.cataName} img={i.img} cataName={i.cataName} />)}
      </div>
    </div>
  );
}

export default Catagories;
