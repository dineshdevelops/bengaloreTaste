import React from "react";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
const index = ({ products }) => {
  const [productList, setProductList] = React.useState(products);
  const handleAvailability = async (id) => {
    //To get the currentAvailability from product list
    const item = productList.filter((product) => product._id === id)[0];
    const availability = item.availability;
    try {
      const res = await axios.put("http://localhost:3000/api/products/" + id, {
        availability: !availability,
      });
      const updatedProductList = await axios.get(
        "http://localhost:3000/api/products"
      );
      setProductList(updatedProductList.data);
    } catch (err) {
      console.log(err);
    }
  };
  //BestSeller handler
  const handleBestSeller = async (id) => {
    //To get the bestSeller from product list
    const item = productList.filter((product) => product._id === id)[0];
    const bestSeller = item.bestSeller;
    try {
      const res = await axios.put("http://localhost:3000/api/products/" + id, {
        bestSeller: !bestSeller,
      });
      const updatedProductList = await axios.get(
        "http://localhost:3000/api/products"
      );
      setProductList(updatedProductList.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Our Menu</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              {/* <th>Id</th> */}
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
              <th>BestSeller</th>
            </tr>
          </tbody>
          {productList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={90}
                    height={90}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                {/* <td>{product._id.slice(0, 5) + "..."}</td> */}
                <td>{product.title}</td>
                <td>₹ {product.price}</td>
                <td>
                  <button
                    className={
                      product.availability
                        ? styles.availabilityTrue
                        : styles.availabilityFalse
                    }
                    onClick={() => {
                      handleAvailability(product._id);
                    }}
                  >
                    {product.availability ? "AVAILABLE" : "UNAVAILABLE"}
                  </button>
                </td>
                <td>
                  <button
                    className={
                      product.bestSeller
                        ? styles.availabilityTrue
                        : styles.availabilityFalse
                    }
                    onClick={() => {
                      handleBestSeller(product._id);
                    }}
                  >
                    {product.bestSeller ? "Best Seller" : "NON Best Seller"}
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const ProductsRes = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      products: ProductsRes.data,
    },
  };
};
export default index;
