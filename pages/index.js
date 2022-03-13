import Head from "next/head";
import BreakFastList from "../components/BreakFastList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import BestSeller from "../components/BestSellerList";
import Slides from "../components/Slides";
import Image from "next/image";
export default function Home({ productList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bengalore Taste</title>
        <meta name="description" content="Bengalore Taste next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Slides />
      <BestSeller productList={productList} />
      <div className={styles.classicMenu}>
        <h1>Our Classic MENU</h1>
        <Image src={"/img/classicMenu.jpg"} alt="" width="900" height="900" />
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products/bestSeller");
  return {
    props: {
      productList: res.data,
    },
  };
};
