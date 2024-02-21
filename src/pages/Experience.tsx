import React from "react";
import styles from "@/styles/Experience.module.css";
import phone from "@/../../public/assets/phone.png";

import ExperienceCard from "@/components/ExperienceCard";
import Image from "next/image";
import c1 from "@/../../public/assets/c1.svg";
import c2 from "@/../../public/assets/c2.svg";
import c3 from "@/../../public/assets/c3.svg";
import c4 from "@/../../public/assets/c4.svg";
import c5 from "@/../../public/assets/c5.svg";

const Experience = () => {
  const cards = [
    {
      title: "Experience",
      subtitle: "Experience subtitle",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas.",
      link: "#",
    },
    {
      title: "Experience",
      subtitle: "Experience subtitle",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas.",
      link: "#",
    },
    {
      title: "Experience",
      subtitle: "Experience subtitle",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas.",
      link: "#",
    },
  ];
  return (
    <div id="experience" className={styles.body}>
      <div className={styles.mainBody}>
        <div className={styles.left}>
          <Image src={phone} alt="phone" priority className={styles.phone} />
        </div>

        <div className={styles.right}>
          <div className={styles.mainBox}>
            <h1 className={styles.title}>Experience</h1>
            <h3 className={styles.subtitle}>Subtitle</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              odit asperiores provident ipsum? Porro, esse eligendi. Accusantium
              obcaecati animi nobis veniam vitae dolores possimus iusto eaque.
              Tempora beatae nesciunt laudantium.
            </p>
            <div className={styles.cards}>
              {cards.map((card: any) => {
                return (
                  <ExperienceCard
                    key={card.name}
                    title={card.title}
                    subtitle={card.subtitle}
                    des={card.des}
                    link={card.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomBox}>
        <h4 className={styles.bottomTitle}>Some of my clients</h4>
        <div className={styles.logos}>
          <Image src={c1} alt="logo1" />
          <Image src={c2} alt="logo2" />
          <Image src={c3} alt="logo3" />
          <Image src={c4} alt="logo4" />
          <Image src={c5} alt="logo5" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
