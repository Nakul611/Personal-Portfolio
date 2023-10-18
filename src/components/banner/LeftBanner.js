import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaTwitter, FaLinkedin, FaDiscord, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiCplusplus,
  SiAdobeaftereffects,
} from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Front-end Developer.", "Android Developer.", "Web3 Enthusiast."],
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 15,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-20 p-4 md:p-8">
        <div className="flex flex-col gap-5">
          <h3 className="text-xl md:text-2xl font-normal">Hello Everyone!</h3>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {" "}
            {"<"}I'm
            <span className="text-designColor capitalize"> Nakul</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="/>"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base md:text-lg font-bodyFont leading-6 md:leading-7 tracking-wide">
          I am a software developer passionate about Front-end, Android, and Web 3.0 technologies. I enjoy solving complex challenges and creating user-friendly solutions. With a strong foundation in software development, I stay updated on the latest trends to deliver cutting-edge applications that make a positive impact.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-base md:text-lg uppercase font-titleFont mb-4">
              Contact Me
            </h2>
            <div className="flex gap-6">
              <a href="https://twitter.com/babubhaiyaog">
                <span className="bannerIcon">
                  <FaTwitter />
                </span>
              </a>
              <a href="https://www.linkedin.com/in/nakul-balaiwar-b909b2222/">
                <span className="bannerIcon">
                  <FaLinkedin />
                </span>
              </a>
              <a href='https://discord.gg/hR8tcpFnxZ'>
                <span className="bannerIcon">
                  <FaDiscord />
                </span>
              </a>
            </div>
          </div>
          <div>
          <h2 className="text-base md:text-lg uppercase font-titleFont mb-4">
              Skills
            </h2>
            <div className="flex gap-6">
              <span className="bannerIcon">
                <SiCplusplus />
              </span>
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
              <span className="bannerIcon">
                <SiAdobeaftereffects />
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LeftBanner;