import Image from "next/image";
import styles from "./page.module.css";
import background from "@/../../public/assets/background.jpg";
import About from "@/pages/About";
import Banner from "@/pages/Banner";
import Experience from "@/pages/Experience";
import Work from "@/pages/Work";
import Pricing from "@/pages/Pricing";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Experience />
      <Work />
      <Pricing />
    </>
  );
}
