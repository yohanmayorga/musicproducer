import Image from "next/image";
import styles from "./page.module.css";
import background from "@/../../public/assets/background.jpg";

export default function Home() {
  return (
    <div className={styles.body}>
      <Image
        src={background}
        alt="background"
        priority
        fill
        style={{ objectFit: "cover" }}
        className={styles.background}
      />

      <h1 className={styles.mainTitle}>MUSIC</h1>

      <h2 className={styles.secondaryTitle}>Producer</h2>
      <p className={styles.credit}>Created by Yohan Mayorga</p>
    </div>
  );
}
