import React from "react";

const BorderAnimate = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className="w-full h-full group relative transition-colors duration-[400ms]"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="hidden md:block absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="hidden md:block absolute right-0 top-0 h-0 w-[2px] bg-primary transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="hidden md:block absolute bottom-0 right-0 h-[2px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="hidden md:block absolute bottom-0 left-0 h-0 w-[2px] bg-primary transition-all delay-300 duration-100 group-hover:h-full" />
    </div>
  );
};

export default BorderAnimate;
