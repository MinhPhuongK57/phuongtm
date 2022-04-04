import { NextPage } from "next";
import React from "react";
import CustomHead from "../../components/Head";

type Props = {};

const Contact: NextPage = (props: Props) => {
  return (
    <div className="container pt-4">
      <CustomHead title="Contact Page" />
      <div className="pt-5">
        <h1>Contact</h1>
      </div>
    </div>
  );
};

export default Contact;
