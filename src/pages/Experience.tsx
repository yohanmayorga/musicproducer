import React from "react";
import styles from "@/styles/Experience.module.css";

import ExperienceCard from "@/components/ExperienceCard";

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
      <div className={styles.mainBox}>
        <h1 className={styles.title}>Experience</h1>
        <h3 className={styles.subtitle}>Subtitle</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odit
          asperiores provident ipsum? Porro, esse eligendi. Accusantium
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
  );
};

export default Experience;
