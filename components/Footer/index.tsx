import React from "react";

type Props = {};

function Footer({}: Props): React.ReactElement {
  return (
    <div style={{ background: "linear-gradient(#fffaff,#f1f1f1)" }}>
      <div className="container">
        <div className="pt-3">Footer</div>
      </div>
    </div>
  );
}

export default Footer;
