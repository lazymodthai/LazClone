import React from "react";
import styles from "./Footer.module.css";

function FootterFirst() {
  return (
    <div className={styles.firstContainer}>
      <div>
        ศูนย์ดูแลลูกค้า
        <ul className={styles.firstList} style={{}}>
          <li>ศูนย์ช่วยเหลือ</li>
          <li>การสั่งซื้อสินค้า</li>
          <li>การส่งสินค้า</li>
          <li>นโยบายของสินค้าต่างประเทศ</li>
          <li>การคืนสินค้า</li>
          <li>ติดต่อเรา</li>
        </ul>
      </div>
      <div>
        ลาซาด้า
        <ul
          className={styles.firstList}
          style={{ listStyleType: "none", padding: "0", fontSize: "12px" }}
        >
          <li>ประเภท</li>
          <li>เกี่ยวกับลาซาด้า</li>
          <li>Afﬁliate Program</li>
          <li>ร่วมงานกับเรา</li>
          <li>ข้อตกลงและเงื่อนไข</li>
          <li>นโยบายความเป็นส่วนตัว</li>
          <li>ข่าวประชาสัมพันธ์</li>
          <li>ความปลอดภัยกับลาซาด้า</li>
          <li>สินค้ายอดนิยม</li>
          <li>Intellectual Property Protection</li>
        </ul>
      </div>
      <div>
        <div className={styles.appDownload}>
        <div className={styles.appLogo}>logo</div>
        <div>App download</div>
        <div>App download</div>
        </div>
      </div>
    </div>
  );
}

export default FootterFirst;
