"use client";
import React from "react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import logo from "@/../../public/assets/logo.svg";
import Link from "next/link";
import { IoMdPlayCircle } from "react-icons/io";

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.body}>
      <Link href={"#home"} onClick={handleScroll}>
        <Image src={logo} alt="logo" width={60} />
      </Link>
      <ul className={styles.links}>
        <Link href="#about" className={styles.link} onClick={handleScroll}>
          About
        </Link>
        <Link href="#experience" className={styles.link} onClick={handleScroll}>
          Experience
        </Link>
        <Link href="#work" className={styles.link} onClick={handleScroll}>
          Work
        </Link>
        <Link href="#pricing" className={styles.link} onClick={handleScroll}>
          Pricing
        </Link>
      </ul>
      <Link href="#contact" className={styles.link}>
        <button className={styles.contact}>
          <IoMdPlayCircle />
          Contact
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
