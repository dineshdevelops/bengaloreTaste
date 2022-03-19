import Head from "next/head";
import BreakFastList from "../components/BreakFastList";
import styles from "../styles/Home.module.css";
import axios from "axios";
export default function Products({productList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products</title>
        <meta name="description" content="AK Restaurant next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BreakFastList productList={productList} />
    </div>
  );
}
export const getServerSideProps = async () => {
<<<<<<< HEAD
  const res = await axios.get("http://localhost:3000/api/products");
=======
  const res = await axios.get(`https://bengaloretaste.com/api/products`);
>>>>>>> parent of 6873365 (AWAIT)
  return {
    props: {
      productList: res.data,
    },
  };
};
