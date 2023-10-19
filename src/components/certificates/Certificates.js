import React from 'react'
import Title from '../layouts/Title'
import { c1, c2,c3 } from "../../assets/index";
import CertificatesCard from './CertificatesCards';

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="w-full py-16 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Achievements"
          des="Certificates"
        />
      </div>
      <div className="grid grid-cols-1 mb-12 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <CertificatesCard
          title="Intern at Prodigy Infotech"
          src={c1}
        />
        <CertificatesCard
          title="Android Development"
          src={c2}
        />
        <CertificatesCard
          title="Problem Solving (Intermidiate)"
          src={c3}
        />
      </div>
    </section>
  );
}

export default Certificates;