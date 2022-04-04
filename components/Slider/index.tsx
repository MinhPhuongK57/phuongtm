import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import SliderImages from "./SliderImages";

const Sliders = () => {
  const ken = SliderImages.length - 1;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === ken ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, ken]);
  return (
    <div className="sliders">
      <SliderContent activeIndex={activeIndex} SliderImages={SliderImages} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? ken : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === ken ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        SliderImages={SliderImages}
        onclick={(activeIndex: number) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Sliders;
