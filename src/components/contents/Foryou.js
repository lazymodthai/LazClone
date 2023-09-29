import styles from "./Foryou.module.css";
import ForyouCard from "./ForyouCard";

function Foryou() {
  const products = [
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/469127f40111face4efcc0317d53f753.jpg_200x200q80.jpg_.webp",
      name: "ขนมเปี๊ยะไก่หยอง เปี๊ยะไส้ไก่หยองไส้แน่นๆ ตราเอ็ม&ดี M&D",
      price: 52,
      oldPrice: 60,
      star: 5,
      comment: 1690,
    },
    {
      payday: 0,
      img: "https://lzd-img-global.slatic.net/g/p/32f91cefdc31a896b122c26ec5f2e968.png_400x400q80.jpg_.webp",
      name: "DHC Vitamin C / ดีเอชซี วิตามินซี รับประทาน 60 วัน บรรจุ 120 แคปซูล",
      price: 109,
      oldPrice: 199,
      star: 5,
      comment: 1493,
    },
    {
      payday: 0,
      img: "https://lzd-img-global.slatic.net/g/p/f1e12291870f3fce1ed527d4b1d3190c.jpg_400x400q80.jpg_.webp",
      name: "ถูกสุด‼[โปรลดราคา✨] ถุงซิปล็อค ถุงฟอยด์เงิน ด้านหน้าใส ด้านหลังทึบ ตั้งได้ (100ใบ) :D",
      price: 22,
      oldPrice: 95,
      star: 5,
      comment: 4666,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/1fa1d78ea08ff15ea05df29a4635d2b5.jpg_400x400q80.jpg_.webp",
      name: "รองเท้าผ้าใบ งานเกรดเอ 👟📦 มีหลายสีให้เลือก สำหรับ ผู้หญิง ผู้ชาย คุณภาพดี รับรองราคาพิเศษ มีเบอร์ 36---45 สินค้ามีพร้อมส่ง",
      price: 275.5,
      oldPrice: 599,
      star: 5,
      comment: 2193,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/a69fecc9391e88f490010e7563e05450.jpg_400x400q80.jpg_.webp",
      name: "s erum h one เซรั่มโฮน เซรั่มพี่หนุ่มกรรชัย หน้ากระจ่างใสใช้ดีสุด( 1 ชิ้น )",
      price: 214,
      oldPrice: 590,
      star: 5,
      comment: 1467,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/63f5dd647f08d7a13f8005e505fcc8a8.jpg_400x400q80.jpg_.webp",
      name: "2023 ใหม่ล่าสุด โทรศัพท์ VIVQ Y30s สมาร์ทโฟนหน้าจอ Full HD 7.5 นิ้ว โทรศัพท์มือถือ Android Smartphone 4G 5G ถูกที่สุด RAM 16GB ROM 128GB 512GB 50MP กล้อง HD โปรโมชั่นใหม่ ลดล้างสต๊อก โทรศัพท์ราคาถูกๆ",
      price: 690,
      oldPrice: 1599,
      star: 5,
      comment: 160,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/a9222779d1ecff0e184ac81ea6e78c93.jpg_400x400q80.jpg_.webp",
      name: "UGREEN สายชาร์จ สายชาร์จไอโฟน Lightning to USB Apple MFI Charging Cable สำหรับ iPhone 14 13 Pro Max iPad iPod Model: 80313",
      price: 277,
      oldPrice: 699,
      star: 5,
      comment: 1077,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/3942724aff58cd3319da709e95ca88cc.jpg_400x400q80.jpg_.webp",
      name: "Sougayilangสายพีอี300Mเอ็นตกปลาสี่สาระสายเอ็นตกปลาPEสายอุปกรตกปลา0.6#-8.0#สายเบ็ดตกปลาสำหรับน้ำเค็มและน้ำจืด",
      price: 45.39,
      oldPrice: 96,
      star: 5,
      comment: 2372,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/80f85e9de1f4405a7a59bdd78e1bc829.jpg_400x400q80.jpg_.webp",
      name: "[20 ชิ้น] (สีดำ) ถุงมือไนไตรแท้ ชนิดไม่มีแป้ง ถุงมือไนไตรท์ชนิดพกพา คุณภาพดี การันตีแบรนด์ CL Glove",
      price: 28.24,
      oldPrice: 45,
      star: 5,
      comment: 1777,
    },
    {
      payday: 0,
      img: "https://lzd-img-global.slatic.net/g/p/55a55aafd6b8399885d24ad839995f2e.jpg_400x400q80.jpg_.webp",
      name: "ไฟตุ้ม พี่โบ้ อันดับ1 จัมโบ้ AT 500W 400W 300W 200W ขาวล้วน/ไล่ยุง ขาว วอร์ม ไล่ยุง solarlight solarcell ไฟตุ้ม ไฟส ไฟพลังงานแสงอาทิตย์ ไฟโซลล่าเซลล์",
      price: 251,
      oldPrice: 700,
      star: 5,
      comment: 2359,
    },
    {
      payday: 0,
      img: "https://lzd-img-global.slatic.net/g/ff/kf/S63130f28ed65410d85cdb7a30d3b23fcF.jpg_400x400q80.jpg_.webp",
      name: "ของแท้ 💯% ชามินดา chaminda ขนาด 15 ซอง",
      price: 80,
      oldPrice: 150,
      star: 5,
      comment: 214,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/4fa21ab766c4c9b18af85eaa4031a24f.jpg_400x400q80.jpg_.webp",
      name: "เซราวี CERAVE Foaming Cleanser โฟมทำความสะอาดผิวหน้าและผิวกาย สำหรับผิวธรรมดา-ผิวมัน เป็นสิวง่าย 236ml.",
      price: 109,
      oldPrice: 499,
      star: 5,
      comment: 564,
    },
    {
      payday: 0,
      img: "https://lzd-img-global.slatic.net/g/p/7da0058a568cb4f80954706bb57842b6.jpg_400x400q80.jpg_.webp",
      name: "GOOD ผ้าถุงตราเจ้าหญิง ขายดี ถูกที่สุด ผ้าถุง ผ้าลายไทย ราคาโรงงาน ผืนใหญ่ ผ้านิ่ม ไม่ลื่น ลายสวย ซับน้ำดี เย็บแล้ว 2 เมตร",
      price: 39.9,
      oldPrice: 99,
      star: 5,
      comment: 1839,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/5d01791a00319de4ca45b28ad3275bc6.jpg_400x400q80.jpg_.webp",
      name: "Boqi Factory ที่ลับเล็บแมว รูปอ่าง ที่ฝนเล็บแมว ของเล่นแมว เป็นที่นอนแมวไปในตัว ฟรี แคปนิท HS-004",
      price: 49,
      oldPrice: 89,
      star: 5,
      comment: 843,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/239f3be9ff5b71978aa8084cca3e697a.jpg_400x400q80.jpg_.webp",
      name: "Dutch Mill ดัชมิลล์ นมเปรี้ยว ยูเอชที รสสตรอเบอร์รี่ 180 มล. (48 กล่อง/ลัง)",
      price: 490,
      oldPrice: 540,
      star: 5,
      comment: 1128,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/c1657aee912c001e7121ae60c60fe5d3.jpg_400x400q80.jpg_.webp",
      name: "ชุดกรรไกรตัดเล็บ ชุดตัดเล็บ กรรไกรตัดเล็บ กรรไกรตัดเล็บขบ ที่ตัดเล็บ ชุดแต่งเล็บ ครบเช็ต 19 ชิ้น พร้อมกล่อง",
      price: 27.37,
      oldPrice: 58,
      star: 5,
      comment: 4569,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/c382f8453295816de5072dfaf35d9025.png_400x400q80.jpg_.webp",
      name: "ไฟฉาย ไฟฉายเเรงสูง ไฟฉายแบบชาร์จ UltraFire 90000LM X 800ยุทธวิธีทหาร ครบเซต T6ไฟฉายLED ไฟฉายแรงสูง อลูมิเนียมอัลลอยด์วัสดุ แบตเตอรี่ลิเธียมในตัว",
      price: 119,
      oldPrice: 399,
      star: 5,
      comment: 966,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/4cf0a284ffcb9a40d44a3ba713799156.png_400x400q80.jpg_.webp",
      name: "ฟิล์มไมล์ Forza300/350 2018-2023",
      price: 39,
      oldPrice: 99,
      star: 5,
      comment: 497,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/ff/kf/S17a4bf4b99a84a20b71b93d3919cc381o.jpg_400x400q80.jpg_.webp",
      name: "สายชาร์จ Essager USB สำหรับ iPhone ยาว 0.5 , 1 , 2m",
      price: 38,
      oldPrice: 99,
      star: 5,
      comment: 176,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/55c799c80708dfd675193ad3164eb482.jpg_400x400q80.jpg_.webp",
      name: "อาท พลัส ยาจุดกันยุง กลิ่นลาเวนเดอร์ 100 ขด",
      price: 102,
      oldPrice: 115,
      star: 5,
      comment: 1819,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/4266c1d4a0f0bead2f135cd67ba71688.jpg_400x400q80.jpg_.webp",
      name: "Essager 33W GaN USB C Charger Digital Display PD Fast Charging For iPhone 13 12 Max Pro iPad For Xiaomi Poco Samsung Charger",
      price: 305,
      oldPrice: 469,
      star: 5,
      comment: 2300,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/f2159349ef7fb4f33163f7ba48a24f62.jpg_400x400q80.jpg_.webp",
      name: "ADIDASman and women กระเป๋าเป้ Backpack",
      price: 274.09,
      oldPrice: 699,
      star: 5,
      comment: 2542,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/66294bbcc0da648a8f68efca2a1b7ece.jpg_400x400q80.jpg_.webp",
      name: "Sandisk Cruzer Blade 16GB (SDCZ50_016G_B35) ( แฟลชไดร์ฟ usb Flash Drive )",
      price: 81,
      oldPrice: 190,
      star: 5,
      comment: 470,
    },
    {
      payday: 1,
      img: "https://lzd-img-global.slatic.net/g/p/c529447449d37ed132e7c27524f5667d.jpg_400x400q80.jpg_.webp",
      name: "ลูกกลิ้งขนาดใหญ่ บริหารหน้าท้อง บริหารกล้ามท้อง สร้าง Six Pack ล้อกลิ้งเล่นกล้ามท้อง",
      price: 104.78,
      oldPrice: 269,
      star: 5,
      comment: 1250,
    },
  ];
  function Calc(now, old) {
    return ((old - now) / old) * 100;
  }
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
