import styles from "./Foryou.module.css";
import ForyouCard from "./ForyouCard";

function Foryou() {
  function Calc(now, old) {
    return ((old - now) / old) * 100;
  }
  const products = [
    { payday:1, img: "https://lzd-img-global.slatic.net/g/p/469127f40111face4efcc0317d53f753.jpg_200x200q80.jpg_.webp", name: "ขนมเปี๊ยะไก่หยอง เปี๊ยะไส้ไก่หยองไส้แน่นๆ ตราเอ็ม&ดี M&D", price: 52, oldPrice: 60, star: 5, comment: 1690 },
    { payday:0,img: "https://lzd-img-global.slatic.net/g/p/32f91cefdc31a896b122c26ec5f2e968.png_400x400q80.jpg_.webp", name: "DHC Vitamin C / ดีเอชซี วิตามินซี รับประทาน 60 วัน บรรจุ 120 แคปซูล", price: 109, oldPrice: 199, star: 5, comment: 1493 },
    { payday:0,img: "https://lzd-img-global.slatic.net/g/p/f1e12291870f3fce1ed527d4b1d3190c.jpg_400x400q80.jpg_.webp", name: "ถูกสุด‼[โปรลดราคา✨] ถุงซิปล็อค ถุงฟอยด์เงิน ด้านหน้าใส ด้านหลังทึบ ตั้งได้ (100ใบ) :D", price: 22, oldPrice: 95, star: 5, comment: 4666 },
    { payday:1,img: "https://lzd-img-global.slatic.net/g/p/1fa1d78ea08ff15ea05df29a4635d2b5.jpg_400x400q80.jpg_.webp", name: "รองเท้าผ้าใบ งานเกรดเอ 👟📦 มีหลายสีให้เลือก สำหรับ ผู้หญิง ผู้ชาย คุณภาพดี รับรองราคาพิเศษ มีเบอร์ 36---45 สินค้ามีพร้อมส่ง", price: 275.5, oldPrice: 599, star: 5, comment: 2193 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
    { payday:0,img: "", name: "", price: 10, oldPrice: 10, star: 5, comment: 0 },
  ];
  return (
    <div>
      <div className={styles.title}>สินค้าเพื่อคุณโดยเฉพาะ</div>
      <div className={styles.productsContainer}>
        <div className={styles.content}>
          {products.map((i) => (
            <ForyouCard
              key={i.name}
              payday={i.payday}
              img={i.img}
              name={i.name}
              price={i.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
              oldprice={i.oldPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
              sale={"-" + Calc(i.price, i.oldPrice).toFixed(0) + "%"}
              comment={i.comment}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Foryou;
