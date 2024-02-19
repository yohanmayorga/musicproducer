"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/MobileNavbar.module.css";
import logo from "@/../../public/assets/logo.svg";
import React, { useState } from "react";
import { IoMdPlayCircle } from "react-icons/io";
import { GiMusicalScore } from "react-icons/gi";

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <Link href={"#home"} onClick={handleScroll}>
          <Image src={logo} alt="logo" width={60} />
        </Link>
        <GiMusicalScore
          className={styles.button}
          onClick={() => (showMenu ? setShowMenu(false) : setShowMenu(true))}
        />
      </div>
      {showMenu && (
        <ul className={styles.links}>
          <Link href="#home" className={styles.link} onClick={handleScroll}>
            Home
          </Link>
          <Link href="#about" className={styles.link} onClick={handleScroll}>
            About
          </Link>
          <Link
            href="#experience"
            className={styles.link}
            onClick={handleScroll}
          >
            Experience
          </Link>
          <Link href="#work" className={styles.link} onClick={handleScroll}>
            Work
          </Link>
          <Link href="#pricing" className={styles.link} onClick={handleScroll}>
            Pricing
          </Link>
          <Link href="#contact" className={styles.link}>
            <button className={styles.contact}>
              <IoMdPlayCircle />
              Contact
            </button>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default MobileNavbar;
