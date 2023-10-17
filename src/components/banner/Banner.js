import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Front-end Developer.", "Android Developer.", "Web3 Enthusiast."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 15,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full py-20 items-center flex border-b-[1px] font-titleFont border-b-black"
    >
      <div className="w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">Hello Everyone!</h4>
          <h1 className="text-6xl font-bold text-white">
            {" "}
            {"<"}I'm
            <span className="text-designColor capitalize"> Nakul</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="/>"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            I kjfh ofihjwf fwujfdhcw jkjsadj fsf fjnwfo fjwoifj lkfjdfj jpokj
            lkjpoju pjpoij j puj p99 kjpoiuj jhguyf pijdwaqpofd ffweq ojfdio
            fwfsa, ohyfd kjpfjupqaw9 iuhfasof jfwifuhnwiufnw ijf0pwkj0wef oij.
          </p>
        </div>
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
                Contact Me
            </h2>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

export default Banner;
