import React from "react";
import styles from "@/styles/About.module.css";
import photo from "@/../../public/assets/photo.png";
import Image from "next/image";
import AboutCard from "@/components/AboutCard";
import { SiYoutubemusic } from "react-icons/si";

const About = () => {
  const cards = [
    {
      icon: <SiYoutubemusic />,
      title: "Experience",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas.",
    },
    {
      icon: <SiYoutubemusic />,
      title: "Experience",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas.",
    },
    {
      icon: <SiYoutubemusic />,
      title: "Experience",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas.",
    },
  ];
  return (
    <div id="about" className={styles.body}>
      <div className={styles.left}>
        <h1 className={styles.title}>Music Producer</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          voluptas, unde, sapiente accusantium molestiae placeat dicta corrupti
          nesciunt vitae ut alias fugiat necessitatibus nulla delectus quisquam
          provident et dignissimos quod!
        </p>
        <div className={styles.cards}>
          {cards.map((card: any) => {
            return (
              <AboutCard
                key={card.name}
                icon={card.icon}
                title={card.title}
                des={card.des}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src={photo}
          alt="photo"
          width={700}
          height={700}
          className={styles.photo}
          priority
        />
      </div>
    </div>
  );
};

export default About;
