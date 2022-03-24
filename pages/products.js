import Head from "next/head";
import BreakFastList from "../components/BreakFastList";
import styles from "../styles/Home.module.css";

export default function Products({ productList }) {
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
export async function getServerSideProps(context) {
  //const URL=process.env.NODE_ENV ==='PRODUCTION'? process.env.PROD_URL : process.env.NEXT_LOCAL_URL
  const data = await fetch(`https://bengaloretaste.com/api/products`);
  const productList = await data.json();
  return {
    props: { productList },
  };
}
