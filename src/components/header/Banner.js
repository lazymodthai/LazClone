import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from './Header.module.css'

function Banner() {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <img
          src="https://icms-image.slatic.net/images/ims-web/c3259ddf-fbef-4119-9c02-f47a000c55d3.jpg"
          alt="banner"
        />
        <AiOutlineClose onClick={() => setIsOpen(false)} size={25} className={styles.close}/>

      </div>
    </div>
  );
}

export default Banner;
