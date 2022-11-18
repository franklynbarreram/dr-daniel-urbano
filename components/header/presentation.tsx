import React from "react";
import { images } from "../../helper/images.helper";

export const Presentation = () => {
  return (
    <div className="info flex flex-wrap gap-10 items-center justify-center px-6">
      <div className="container-image">
        <img
          className="rounded-full bg-[#015188] h-[250px] w-[250px] object-cover"
          src={images.daniel}
          alt=""
        />
      </div>
      <div className="container-info">
        <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold uppercase text-white">
          Dr. Daniel Urbano
        </h2>
        <span className="block font-semibold text-center md:text-left text-xl uppercase text-white mt-1">
          Neurocirujano
        </span>
        <span className="block font-light text-center md:text-left text-xl text-white mt-4">
          Especialista en Cirugía de Cerebro y Columna Vertebral
        </span>
      </div>
    </div>
  );
};
