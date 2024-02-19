import React from "react";
import Image from "next/image";
import styles from "@/styles/Banner.module.css";
import background from "@/../../public/assets/background.jpg";

const Banner = () => {
  return (
    <div id="home" className={styles.body}>
      <Image
        src={background}
        alt="background"
        priority
        fill
        style={{ objectFit: "cover" }}
        className={styles.background}
      />
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>MUSIC</h1>

        <h2 className={styles.secondaryTitle}>Producer</h2>
        <p className={styles.credit}>Created by Yohan Mayorga</p>

        <div className={styles.pages}></div>
      </div>
    </div>
  );
};

export default Banner;
