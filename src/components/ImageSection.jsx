import React from "react";
import BarImage from "../assets/images/bar-counter.jpg";

export default function ImageSection() {
  return (
    <section className="w-full">
      <div className="w-full h-[450px] overflow-hidden">
        <img
          src={BarImage}
          alt="Gastronomy bar counter"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
