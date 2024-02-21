import React from "react";
import styles from "@/styles/Work.module.css";
import background from "@/../../public/assets/tech.jpg";
import instagram from "@/../../public/assets/instagram.png";
import Image from "next/image";
import { BsBriefcase } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import photo1 from "@/../../public/assets/photo1.png";
import photo2 from "@/../../public/assets/photo2.png";
import photo3 from "@/../../public/assets/photo3.png";
import WorkCard from "@/components/WordCard";
import Customers from "@/components/Customers";

const Work = () => {
  const cards = [
    {
      title: "Work title",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Work title",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Work title",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const customers = [
    {
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veniam vel dolore officiis ratione mollitia reprehenderit illum provident quas dolor.",
      name: "Name Lastname",
      title: "Executive Vice-President",
      photo: photo1,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veniam vel dolore officiis ratione mollitia reprehenderit illum provident quas dolor.",
      name: "Name Lastname",
      title: "Executive Vice-President",
      photo: photo2,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veniam vel dolore officiis ratione mollitia reprehenderit illum provident quas dolor.",
      name: "Name Lastname",
      title: "Executive Vice-President",
      photo: photo3,
    },
  ];
  return (
    <div id="work" className={styles.body}>
      <Image
        src={background}
        alt="background"
        priority
        fill
        style={{ objectFit: "cover" }}
        className={styles.background}
      />
      <div className={styles.mainBody}>
        <div className={styles.left}>
          <div className={styles.subtitle}>
            <BsBriefcase className={styles.icon} />
            <h4 className={styles.subText}>Lorem ipsum dolor sit.</h4>
          </div>
          <h1 className={styles.title}>
            Part of my work as a music producer for years.
          </h1>
          <p className={styles.subText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            voluptatum odio est. Voluptates quaerat alias perferendis dicta.
            Dolore consequatur iure earum fugiat enim dicta accusamus voluptatem
            sed modi. Quae, quis?
          </p>
          <div className={styles.cards}>
            {cards.map((card: any) => {
              return (
                <WorkCard key={card.name} title={card.title} des={card.des} />
              );
            })}
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src={instagram}
            alt="phone"
            priority
            className={styles.phone}
          />
          <h1 className={styles.titlePhone}>Follow my work</h1>
          <div className={styles.social}>
            <IoLogoInstagram className={styles.socialIcon} />
            <FaXTwitter className={styles.socialIcon} />
            <PiTiktokLogo className={styles.socialIcon} />
            <FaLinkedinIn className={styles.socialIcon} />
          </div>
        </div>
      </div>
      <div className={styles.customers}>
        {customers.map((card: any) => {
          return (
            <Customers
              key={card.name}
              title={card.title}
              des={card.des}
              name={card.name}
              photo={card.photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
