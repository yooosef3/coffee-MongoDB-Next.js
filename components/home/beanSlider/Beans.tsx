import BeanSlider from "./BeanSlider";
import React from "react";

const Beans = () => {
  return (
    <div className="flex pt-16 flex-col items-center justify-center">
      <h1 className="text-slate-800 pb-8 font-bold text-lg lg:text-2xl">انواع دانه های قهوه</h1>
      <BeanSlider />
    </div>
  );
};

export default Beans;
