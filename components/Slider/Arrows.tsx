import React from "react";

const Arrows = ({ prevSlide, nextSlide }: any): React.ReactElement => {
  return (
    <div className="arrows">
      <span className="prev-s" onClick={prevSlide}>
        {/* <i className="fas fa-long-arrow-alt-left"></i> */}
        &larr;
      </span>
      <span className="next-s" onClick={nextSlide}>
        {/* <i className="fas fa-long-arrow-alt-right"></i> */}
        &rarr;
      </span>
    </div>
  );
};

export default Arrows;
