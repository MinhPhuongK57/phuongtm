import { NextPage } from "next";
import React from "react";
import CustomHead from "../../components/Head";

type Props = {};

const About: NextPage = (props: Props) => {
  return (
    <div className="container pt-4">
      <CustomHead title="About Page" />
      <div className="pt-5">
        <h1>About Page</h1>
      </div>
    </div>
  );
};

export default About;
