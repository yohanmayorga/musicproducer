import React from "react";
import styles from "@/styles/About.module.css";
import photo from "@/../../public/assets/photo.png";
import Image from "next/image";

const About = () => {
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
      </div>
      <div className={styles.right}>
        <Image
          src={photo}
          alt="photo"
          width={768}
          height={851}
          className={styles.photo}
          priority
        />
      </div>
    </div>
  );
};

export default About;
