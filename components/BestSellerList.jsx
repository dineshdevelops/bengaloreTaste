import React from "react";
import styles from "../styles/BestSellerList.module.css";
import BreakFastCard from "./BreakFastCard";
const BestSeller = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Top Picks for You !</h1>
      <p className={styles.desc}>
        Don't watch the clock; Order quick.Your Food is waiting for you !
      </p>
      <div className={styles.wrapper}>
        {productList.map((product) => (
          <BreakFastCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
