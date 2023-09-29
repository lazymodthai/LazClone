import React from 'react'
import styles from './Catagories.module.css'

function CatagoryCard(props) {
  return (
    <div className={styles.card}>

      <div className={styles.cardImgBox}>
        <div className={styles.cardImg}>
          <img src={props.img} alt={props.cataName} />
        </div>
      </div>

      <div className={styles.cardTextBox}>
        <div className={styles.cataName}>{props.cataName}</div>
      </div>
    </div>
  )
}

export default CatagoryCard