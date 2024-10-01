import React from "react";
import { ReactTyped } from "react-typed";
import styles from "./ProfileStyles.module.css";
import profileImg from "../../assets/profile_final2.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import leetcodeLight from "../../assets/leetcode-light.png";
import leetcodeDark from "../../assets/leetcode-dark.png";
import gfgLight from "../../assets/geeksforgeeks-light.png";
import gfgDark from "../../assets/geeksforgeeks-dark.png";
import xLight from "../../assets/x-light.svg";
import xDark from "../../assets/x-dark.svg";
import CV from "../../assets/Amol_Resume_Updated.pdf";
import { useTheme } from "../../common/ThemeContext";

function Profile() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const xIcon = theme === "light" ? xLight : xDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const leetcodeIcon = theme === "light" ? leetcodeLight : leetcodeDark;
  const gfgIcon = theme === "light" ? gfgLight : gfgDark;

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.logo}>&lt;amol.portfolio/&gt;</h2>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </header>
      <section id="profile" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            className={styles.Profile}
            src={profileImg}
            alt="profile picture"
          />

          <div className={styles.info}>
            <h2 className={styles.greeting}>Hello!👋 I am </h2>
            <h1>Amol Shinde</h1>
            <h2 className={styles.typingEffect}>
              <ReactTyped
                strings={[
                  "Software Developer",
                  "Full Stack Developer",
                  "Frontend Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              ></ReactTyped>
            </h2>
            <span>
              <a href="https://www.linkedin.com/in/amol1211/" target="_blank">
                <img src={linkedinIcon} alt="LinkedIn icon" />
              </a>
              <a
                className={styles.githubIcon}
                href="https://github.com/amol1211"
                target="_blank"
              >
                <img src={githubIcon} alt="GitHub icon" />
              </a>
              <a
                className={styles.leetcodeIcon}
                href="https://leetcode.com/amol1211"
                target="_blank"
              >
                <img src={leetcodeIcon} alt="Leetcode icon" />
              </a>
              <a
                className={styles.gfgIcon}
                href="https://www.geeksforgeeks.org/user/amol1211"
                target="_blank"
              >
                <img src={gfgIcon} alt="GeeksForGeeks icon" />
              </a>
              <a href="https://x.com/amol_twits" target="_blank">
                <img src={xIcon} alt="X icon" />
              </a>
            </span>

            <a href={CV} download>
              <button className="hover">Resume</button>
            </a>
          </div>
        </div>

        <div className={styles.description}>
          <p>
            I am Computer Engineering grad of class 2023 from prestigious
            Savitribai Phule Pune University, passionate about software
            development and actively seeking entry-level FTE opportunities. I've
            honed my skills in data structures and algorithms using C/C++ and
            have a solid grasp of CS fundamentals.
          </p>
          <br />
          <p>
            My tech stack includes HTML5, CSS3, JavaScript, TypeScript, ReactJS,
            Redux, NodeJS, ExpressJS, MongoDB, MySQL, and Tailwind CSS. I'm
            adept at writing clean, maintainable code and integrating RESTful
            APIs, with experience in Unix/Linux and Windows environments.
          </p>
          <br />
          <p>
            I'm excited about working on innovative projects that improve user
            experiences and collaborating with teams to bring impactful products
            to life. I'm eager to explore any opportunities you might have.
            Thanks for stopping by!
          </p>
        </div>
      </section>
    </>
  );
}

export default Profile;
