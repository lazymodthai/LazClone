import React from 'react'
import styles from "./CardBottomBanner.module.css";
import { v1 as uuidv1 } from 'uuid';
function CardBottomBanner() {
    const bannerImg = ["https://icms-image.slatic.net/images/ims-web/888209b8-a1b1-4d44-8497-0e22c88dfed2.jpg","https://icms-image.slatic.net/images/ims-web/7dc7c8e2-aa43-4323-b58f-2ad06a280c28.jpg","https://icms-image.slatic.net/images/ims-web/8dd49d6c-0591-4b97-91b9-a01df99901bb.jpg"]
  return (
    <div className={styles.container}>{bannerImg.map(i=><img src={i} key={uuidv1()} alt=''/>)}</div>
  )
}

export default CardBottomBanner