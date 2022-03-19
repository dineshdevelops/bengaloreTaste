import React from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import axios from "axios";
import Head from "next/head";

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
      <Head>
        <title>{product.title}</title>
        <meta name="description" content="Bengalore Taste next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
            onClick={() =>
              deliveryPartnerRedirect(
                "https://www.swiggy.com/restaurants/bengalore-taste-dwarka-nagar-vizag-507398"
              )
            }
            height="100px"
            alt=""
            className={styles.deliveryPartnersLogo}
          />
          <Image
            src="/img/zomato.png"
            width="100px"
            onClick={() =>
              deliveryPartnerRedirect(
                "https://www.swiggy.com/restaurants/bengalore-taste-dwarka-nagar-vizag-507398"
              )
            }
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
    `https://bengaloretaste.com/api/products/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};
