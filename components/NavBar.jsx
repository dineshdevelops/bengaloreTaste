import React from "react";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" width="30" height="30" alt="" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>999 48X XX95</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href={`/`} passHref>
            <li className={styles.listItem}>HomePage</li>
          </Link>
          <Link href={`/products`} passHref>
            <li className={styles.listItem}>Products</li>
          </Link>
        </ul>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Image src="/img/AK-Foods.png" alt="" width="250px" height="130px" />
        </ul>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href={`/about`} passHref>
            <li className={styles.listItem}>About US</li>
          </Link>
          <Link href={`/contactUs`} passHref>
            <li className={styles.listItem}>Contact US</li>
          </Link>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.menu}>
          {/* <Image src="/img/menu.png" alt="" width="30px" className={styles.menuImage} height="30px" /> */}
          <MenuIcon sx={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
