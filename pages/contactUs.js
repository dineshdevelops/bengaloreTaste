import React from "react";
import styles from "../styles/ContactUs.module.css";
const contactUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.addressContainer}>
        <div className={styles.addressBox}>
          <h1>Bengalore Taste</h1>
          <span className={styles.addressText}>
            D.No : 9, 14-12, VIP Rd,
            <br /> CBM Compound Visakhapatnam,
            <br /> Andhra Pradesh 530003
          </span>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3681024179577!2d83.31294011488117!3d17.727286587875785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433a29b2dbb9%3A0xa125614adb34eb21!2sBengalore%20Taste!5e0!3m2!1sen!2sin!4v1647150732116!5m2!1sen!2sin"
            width="700"
            height="350"
            title="Google Map"
          />
        </div>
      </div>
    </div>
  );
};

export default contactUs;
