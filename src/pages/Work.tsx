import React from "react";
import styles from "@/styles/Work.module.css";
import background from "@/../../public/assets/guitar.jpg";
import Image from "next/image";
import { BsBriefcase } from "react-icons/bs";

const Work = () => {
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
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Work;
