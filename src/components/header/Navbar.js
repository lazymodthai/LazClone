import React from "react";
import styles from "./Header.module.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

import { v4 as uuidv4 } from "uuid";

function Navbar(props) {
  const menuItem = [
    {
      name: "ช้อปคุ้มกว่าเดิมบนแอป",
      type: "important",
    },
    {
      name: "ขายสินค้ากับลาซาด้า",
      type: "important",
    },
    {
      name: "ช่วยเหลือ",
      type: "normal",
    },
    {
      name: "ติดตามสินค้า",
      type: "normal",
    },
    {
      name: "ลงชื่อเข้าใช้",
      type: "normal",
    },
    {
      name: "สมัครสมาชิก",
      type: "normal",
    },
    {
      name: "CHANGE LANGUAGE",
      type: "normal",
    },
  ];
  return (
    <div className={styles.navBar}>
      <div className={styles.menuBar}>
        <div className={styles.container}>
          <ul className={styles.menuItem}>
            {menuItem.map((e) => (
              <a href="/" key={uuidv4()}>
                <li
                  className={e.type === "important" ? styles.imp : styles.nor}
                >
                  {e.name}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.logoBar}>
        <div className={styles.logoContainer}>
          <div className={styles.logoContent}>
            <img
              className={styles.logo}
              src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png"
              alt="logo"
            />
          </div>

          <form onSubmit={console.log("Submit")} className={styles.searchBox}>
            <input
              type="text"
              placeholder="ค้นหาในลาซาด้า"
              className={styles.txtBox}
            />
            <button type="submit" className={styles.btnSubmit}>
              <AiOutlineSearch size={25} />
            </button>
          </form>
          <AiOutlineShoppingCart size={35} className={styles.cartIcon} />
          <img
            className={styles.pro1}
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1DcZESBr0gK0jSZFnXXbRRXXa.jpg"
            alt="pro1"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
