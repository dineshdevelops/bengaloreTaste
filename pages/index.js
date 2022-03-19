import Head from "next/head";
import BreakFastList from "../components/BreakFastList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import BestSeller from "../components/BestSellerList";
import Slides from "../components/Slides";
export default function Home({productList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>AK Restaurant</title>
        <meta name="description" content="AK Restaurant next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Slides />
      <BestSeller productList={productList} />
    </div>
  );
}
export const getServerSideProps = async () => {
<<<<<<< HEAD
  const res = await axios.get("http://localhost:3000/api/products/bestSeller");
=======
  const res = await axios.get(`https://bengaloretaste.com/api/products/bestSeller`);
>>>>>>> parent of 6873365 (AWAIT)
  return {
    props: {
      productList: res.data,
    },
  };
};
