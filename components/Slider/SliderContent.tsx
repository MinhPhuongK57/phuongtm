import Link from "next/link";
import React from "react";

const SliderContent = ({
  activeIndex,
  SliderImages,
}: any): React.ReactElement => {
  return (
    <section>
      {SliderImages.map((slide: any, index: number) => (
        <div
          key={index}
          className={index === activeIndex ? "slide active" : "inactive"}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sliders-image" src={slide.url} alt="" />
          <h2 className="sliders-title">{slide.title}</h2>
          <h3 className="sliders-description">{slide.description}</h3>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
