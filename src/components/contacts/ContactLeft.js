import React from 'react'
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-bodyColor p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center mb-5">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nakul Balaiwar</h3>
        <p className="text-lg font-normal text-gray-100">
          Front-end Developer | Android Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        As a 3rd-year computer science student, contribute to open source, solve social issues through tech, and stay updated with ethical considerations for impactful change.
        </p>
        <p className="text-base text-gray-100 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 6392307525</span>
        </p>
        <p className="text-base text-gray-100 flex items-center gap-2">
          Email: <span className="text-lightText">29814csds@gmail.com</span>
        </p>
      </div>
    </div>
  );
}

export default ContactLeft;