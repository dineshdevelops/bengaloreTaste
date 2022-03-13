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
  const res = await axios.get(`${process.env.REACT_API_URL}/api/products`);
  return {
    props: {
      productList: res.data,
    },
  };
};
