import Image from "next/image";
import styles from "./page.module.css";
import background from "@/../../public/assets/background.jpg";
import About from "@/pages/About";
import Banner from "@/pages/Banner";
import Experience from "@/pages/Experience";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Experience />
    </>
  );
}
