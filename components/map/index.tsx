import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { location } from "../../helper/location.helper";

export const Map = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-20 px-4 md:px-10">
      <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold uppercase text-white mb-10">
        Ubicación
      </h2>
      <div className="container-location mb-10 flex gap-4 items-center">
        <div className="border text-white border-white hover:bg-white hover:text-primary rounded-full p-4">
          <a href={location.link} target="_blank" rel="noreferrer">
            <FaMapMarkedAlt className="text-3xl " />
          </a>
        </div>
        <span className="text-white block">
          <a href={location.link} target="_blank" rel="noreferrer">
            Avenida Guayana, sector Santa Ines, calle 2. Edificio Cemoc (Centro
            de especialidades Occidente). San Cristóbal, Estado Táchira.
          </a>
        </span>
      </div>
      <iframe
        src={location.embed}
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
