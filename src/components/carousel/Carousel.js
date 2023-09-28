import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);
  const content = children;

  const handleNext = () => {
    if (counter !== content.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handlePre = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    } else {
      setCounter(content.length);
    }
  };

  const handlePage = page => {
    setCounter(page);
  };

  const handleMouse = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      } else {
        clearInterval(interval);
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.App}>
      <div
        className={styles.slide}
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        {content.map((item, index) => (
          <div
            className={counter - 1 === index ? styles.show : styles.notshow}
            key={index}
          >
            {item}
          </div>
        ))}

        <button className={styles.prev} onClick={handlePre}>
          &#10094;
        </button>
        <button className={styles.next} onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <div className={styles.page}>
        {content.map((item, index) => (
          <span
  key={index}
  className={`${styles.dot} ${counter - 1 === index ? styles.active : ''}`}
  onClick={() => handlePage(index + 1)}
/>

        ))}
      </div>
    </div>
  );
};

export default Carousel;
