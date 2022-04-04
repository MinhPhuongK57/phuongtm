import React from "react";

const Dots = ({
  activeIndex,
  onclick,
  SliderImages,
}: any): React.ReactElement => {
  return (
    <div className="all-dots">
      {SliderImages.map((index: number) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
