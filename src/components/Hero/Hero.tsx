import { Typewriter } from "react-simple-typewriter";

import "./Hero.css";
import profile_img from "../../assets/profile_img.png";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={profile_img} alt="" />
      <h1>
        Hello, I'm <span>Deepak</span>
      </h1>

      <h2>
        I am a{" "}
        <span>
          <Typewriter
            words={[
              "Frontend Developer",
              "UI Developer",
              "Web Developer",
              "Coder",
            ]}
            loop={0} // 0 = infinite loop
            cursor
            cursorStyle={<span className="text-[#8245ec]">|</span>}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000} // Delay before deleting
          />
        </span>
      </h2>
      <div className="hero-action">
        <a
          className="hero-connect"
          href="https://www.linkedin.com/in/deepak-karanam-84b7ba319"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me
        </a>
        {/* <div className="hero-resume">My resume</div> */}
      </div>
    </div>
  );
};

export default Hero;
