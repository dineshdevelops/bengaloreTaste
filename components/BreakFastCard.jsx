import React from "react";
import styles from "../styles/BreakFastCard.module.css";
import Image from "next/image";
import Link from "next/link";
const BreakFastCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <Link href={`/products/${product._id}`} passHref>
        <Image src={product.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>₹{product.price}</span>
      <p className={styles.desc}>{product.desc}</p>
    </div>
  );
};

export default BreakFastCard;
