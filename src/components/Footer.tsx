import React from "react";
import styles from "@/styles/Footer.module.css";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.body}>
      <h4 className={styles.title}>Music Producer</h4>
      <p className={styles.name}>Created by Yohan Mayorga</p>
      <Link
        href="https://github.com/yohanmayorga/musicproducer"
        target="_blank"
        className={styles.link}
      >
        <LuGithub className={styles.icon} />
      </Link>
    </div>
  );
};

export default Footer;
