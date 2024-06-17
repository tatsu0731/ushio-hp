import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import ProjectSec from "./components/organisms/ProjectSec";
import MishimaSec from "./components/organisms/MishimaSec";
import ProjectsSec from "./components/organisms/ProjectsSec";
import PromoteBlogSec from "./components/organisms/PromoteBlogSec";
import PromoteSNS from "./components/organisms/PromoteSNS";
import Hero from "./components/organisms/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProjectSec />
      <MishimaSec />
      <ProjectsSec />
      <PromoteBlogSec />
      <PromoteSNS />
      <Footer />
    </>
  );
}
