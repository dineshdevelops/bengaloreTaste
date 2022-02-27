import React from 'react'
import styles from '../styles/NavBar.module.css'
import Image from "next/image"
const NavBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.callButton}>
                <Image src="/img/telephone.png" width="30" height="30" alt="" />
            </div>
            <div className={styles.texts}>
                <div className={styles.text}>ORDER NOW</div>
                <div className={styles.text}>999 480 9095</div>
            </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>HomePage</li>
                <li className={styles.listItem}>Products</li>
                <li className={styles.listItem}>Menu</li>
                <Image src="/img/AK-Foods.png" alt="" width="250px" height="130px" />
                <li className={styles.listItem}>Events</li>
                <li className={styles.listItem}>Blog</li>
                <li className={styles.listItem}>Contact</li>
            </ul>
        </div>
        <div className={styles.item}>
            <div className={styles.cart}>
                <Image src="/img/cart.png" alt='' width="30px" height="30px" />
                <div className={styles.counter}>3</div>
            </div>
        </div>
    </div>
  )
}

export default NavBar