import React from "react";
import styles from "../styles/BreakFastCard.module.css";
import Image from "next/image";
const BreakFastCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/dosa.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Special Dosa</h1>
      <span className={styles.price}>₹30</span>
      <p className={styles.desc}>
        The Dosa shop owner outside the IT company never knew how many IT
        employees arejealous of him
      </p>
    </div>
  );
};

export default BreakFastCard;
