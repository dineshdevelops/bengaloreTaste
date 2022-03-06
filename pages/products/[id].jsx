import React from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import axios from "axios";
const Product = ({ product }) => {
  const [productCount, setProductCount] = React.useState(1);
  const handlePlusClick = () => {
    productCount < 10 ? setProductCount(productCount + 1) : setProductCount(1);
  };
  const handleMinusClick = () => {
    productCount > 1 ? setProductCount(productCount - 1) : setProductCount(1);
  };
  const deliveryPartnerRedirect = (link) => {
    window.open(link);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.title}</h1>
        <span className={styles.price}>₹{product.price * productCount}</span>
        <p className={styles.desc}>{product.desc}</p>
        <h3 className={styles.quantity}>Choose the Quantity</h3>
        <div className={styles.quantityNo}>
          <button className={styles.quantityButton} onClick={handlePlusClick}>
            +
          </button>
          <span className={styles.quantityNumbers}>{productCount}</span>
          <button className={styles.quantityButton} onClick={handleMinusClick}>
            -
          </button>
        </div>
        <h3 className={styles.quantity}>
          Order Now from our delivery partners
        </h3>
        <div className={styles.deliveryPartners}>
          <Image
            src="/img/swiggy.png"
            width="100px"
            onClick={() => deliveryPartnerRedirect("https://www.swiggy.com/restaurants/sangeethas-home-kitchen-kosumada-street-tiruvennanallur-tiruvannamalai-153925")}
            height="100px"
            alt=""
            className={styles.deliveryPartnersLogo}
          />
          <Image
            src="/img/zomato.png"
            width="100px"
            onClick={() => deliveryPartnerRedirect("https://www.zomato.com/tiruvannamalai/hotel-new-annapoorna-tiruvannamalai-locality/order")}

            height="100px"
            alt=""
            className={styles.deliveryPartnersLogo}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};
