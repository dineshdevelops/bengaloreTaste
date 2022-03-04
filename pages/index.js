import Head from "next/head";
import BreakFastList from "../components/BreakFastList";
import styles from "../styles/Home.module.css";
import axios from "axios";
export default function Home({productList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>AK Restaurant</title>
        <meta name="description" content="AK Restaurant next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BreakFastList productList={productList} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
    },
  };
};
