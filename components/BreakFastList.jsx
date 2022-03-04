import React from "react";
import styles from "../styles/BreakFastList.module.css";
import BreakFastCard from "./BreakFastCard";
const BreakFastList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ONLY RESTAURANT TO BREAK YOUR FASTING</h1>
      <p className={styles.desc}>
        I feel better all day if I start off by eating healthy. Breakfast is
        simple: multigrain toast with natural peanut butter, oatmeal, yogurt,
        fruit, or healthy cereal.
      </p>
      <div className={styles.wrapper}>
        {productList.map((product) => (
          <BreakFastCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BreakFastList;
