import type { NextPage } from "next";
import Link from "next/link";
import CustomHead from "../components/Head";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <CustomHead title="Home Page" />
      <div className="pt-5">
        <Slider />
      </div>
    </>
  );
};

export default Home;
