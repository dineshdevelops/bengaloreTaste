import React from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
const Product = () => {
  const [productCount, setProductCount] = React.useState(1);
  const handlePlusClick = () => {
    productCount < 10 ? setProductCount(productCount + 1) : setProductCount(1)
  }
  const handleMinusClick = () => {
    productCount > 1 ? setProductCount(productCount - 1) : setProductCount(1)
  }
  const dosa = {
    id: 1,
    img: "/img/dosa.png",
    name: "Plain Dosa",
    price: 30,
    desc: "A dosa is a thin pancake originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={dosa.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{dosa.name}</h1>
        <span className={styles.price}>₹{dosa.price*productCount}</span>
        <p className={styles.desc}>{dosa.desc}</p>
        <h3 className={styles.quantity}>Choose the Quantity</h3>
        <div className={styles.quantityNo}>
          <button  className={styles.quantityButton} onClick={handlePlusClick}>+</button>
          <span className={styles.quantityNumbers}>{productCount}</span>
          <button className={styles.quantityButton} onClick={handleMinusClick}>-</button>
        </div>
        <h3 className={styles.quantity}>Order Now from our delivery partners</h3>
        <div className={styles.deliveryPartners}>
          <Image src="/img/swiggy.png" width="100px" height="100px" alt="" className={styles.deliveryPartnersLogo}/>
          <Image src="/img/zomato.png" width="100px" height="100px" alt="" className={styles.deliveryPartnersLogo} />
        </div>
      </div>
    </div>
  );
};

export default Product;
