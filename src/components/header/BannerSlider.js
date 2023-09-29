import React from "react";
import styles from "./BannerSlider.module.css";
import Carousel from "../carousel/Carousel";
import { v4 as uuidv4 } from "uuid";

function BannerSlider() {
  const firstMenu = [
    "อุปกรณ์ อิเล็กทรอนิกส์",
    "อุปกรณ์เสริม อิเล็กทรอนิกส์",
    "ทีวีและเครื่องใช้ ไฟฟ้าในบ้าน",
    "สุขภาพและความงาม",
    "เด็กอ่อน และของเล่น",
    "ซูเปอร์มาร์เก็ต และสัตว์เลี้ยง",
    "บ้านและไลฟ์สไตล์",
    "แฟชั่น และ เครื่องประดับผู้หญิง",
    "แฟชั่น และ เครื่องประดับผู้ชาย",
    "แฟชั่น และ เครื่องประดับสำหรับเด็ก",
    "กีฬาและ การเดินทาง",
    "ยานยนต์ และอุปกรณ์",
  ];

  return (
    <div>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.sideMenu}>
            {firstMenu.map((i) => (
              <div className={styles.sideItem} key={uuidv4()}>{i}</div>
            ))}
          </div>
          <div className={styles.carousel}>
            <Carousel>
              <div>
                <img
                  src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/a8c5e7df-3ec4-4502-b74c-7a000b94c483.jpg_1200x1200q90.jpg_.webp"
                  alt="img1"
                  className={styles.ximg}
                />
              </div>
              <div>
                <img
                  src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/7ce893c7-fbc0-4875-924e-a635a7decf2b.jpg_1200x1200q90.jpg_.webp"
                  alt="img2"
                  className={styles.ximg}
                />
              </div>
              <div>
                <img
                  src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/436447f3-7343-4f9b-bf6d-7d805f09d523.jpg_1200x1200q90.jpg_.webp"
                  alt="img3"
                  className={styles.ximg}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSlider;
