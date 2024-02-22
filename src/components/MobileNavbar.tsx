"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/MobileNavbar.module.css";
import logo from "@/../../public/assets/logo.svg";
import React, { useEffect, useRef, useState } from "react";
import { IoMdPlayCircle } from "react-icons/io";
import { GiMusicalScore } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [callback]);
    return ref;
  };
  const ref = useOutsideClick(() => {
    setShowMenu(false);
  });

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <Link href={"#home"} onClick={handleScroll}>
          <Image src={logo} alt="logo" width={60} />
        </Link>
        <GiMusicalScore
          className={styles.button}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      {showMenu && (
        <div ref={ref} className={styles.linksBox}>
          <div className={styles.closeContainer}>
            <MdClose
              className={styles.close}
              onClick={() => setShowMenu(false)}
            />
          </div>
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
            <Link
              href="#pricing"
              className={styles.link}
              onClick={handleScroll}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className={styles.link}
              onClick={handleScroll}
            >
              <button className={styles.contact}>
                <IoMdPlayCircle />
                Contact
              </button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
