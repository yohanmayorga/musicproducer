import React from "react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import logo from "@/../../public/assets/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.body}>
      <Link href={"/"}>
        <Image src={logo} alt="logo" height={50} width={50} />
      </Link>
      <ul className={styles.links}>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/experience" className={styles.link}>
          Experience
        </Link>
        <Link href="/work" className={styles.link}>
          Work
        </Link>
        <Link href="/pricing" className={styles.link}>
          Pricing
        </Link>
      </ul>
      <Link href="/contact">
        <button className={styles.contact}>Contact</button>
      </Link>
    </div>
  );
};

export default Navbar;
