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
          <div className={styles.text}>+91 7416432525</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href={`/`} passHref>
            <li className={styles.listItem}>HOME</li>
          </Link>
          <Link href={`/products`} passHref>
            <li className={styles.listItem}>MENU</li>
          </Link>
        </ul>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Image src="/img/logo.png" alt="" width="150px" height="100px" />
        </ul>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href={`/about`} passHref>
            <li className={styles.listItem}>ABOUT US</li>
          </Link>
          <Link href={`/contactUs`} passHref>
            <li className={styles.listItem}>CONTACT US</li>
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
