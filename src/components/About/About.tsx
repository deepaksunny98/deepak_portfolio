import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/profile_img.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Frontend Developer with over 7 years of professional
              experience, specializing in building responsive, user-friendly,
              and scalable web applications. I have worked with leading
              organizations like PayPal and Moneris, focusing on creating
              reusable components, improving performance and delivering great
              user experiences.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <div>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <div>
                <hr style={{ width: "80%" }} />
              </div>
            </div>
            <div className="about-skill">
              <p>TypeScript</p>
              <div>
                <hr style={{ width: "70%" }} />
              </div>
            </div>
            <div className="about-skill">
              <p>Redux</p>
              <div>
                <hr style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>7+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
