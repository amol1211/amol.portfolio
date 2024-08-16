import React from "react";
import styles from "./ProjectsStyles.module.css";
import project1 from "../../assets/authvault_screenshot.png";
import project2 from "../../assets/linkite_screenshot.png";
import project3 from "../../assets/chromedictionary_screenshot.png";
import miniproject1 from "../../assets/forexchange_screenshot.png";
import miniproject2 from "../../assets/noteworthynote_screenshot.png";
import miniproject3 from "../../assets/speakify_screenshot.png";
import miniproject4 from "../../assets/taskwise_screenshot.png";

const mainProjects = [
  {
    title: "AuthVault",
    image: project1,
    github: "https://github.com/amol1211/AuthVault",
    liveDemo: "https://authvault.onrender.com",
    description:
      "AuthVault is an authorization application built with the MERN stack.",
  },
  {
    title: "LinkLite",
    image: project2,
    github: "https://github.com/amol1211/LinkLite",
    liveDemo: "https://linklite-5kh2.onrender.com",
    description:
      "LinkLite is a URL shortener application built with the MERN stack.",
  },
  {
    title: "Chrome Dictionary",
    image: project3,
    github: "https://github.com/amol1211/Chrome-Dictionary",
    liveDemo: "https://github.com/amol1211/Chrome-Dictionary",
    description:
      "A Chrome extension that lets user find the meaning/definition of any word they do not know instantly without needing to switch tabs.",
  },
];

const miniProjects = [
  {
    title: "foreXchange",
    image: miniproject1,
    github: "https://github.com/amol1211/foreXchange",
    liveDemo: "https://forexchange.onrender.com",
    description:
      "Currency converter app which provides real-time currency exchange rate information of various contries.",
  },
  {
    title: "NoteWorthyNote",
    image: miniproject2,
    github: "https://github.com/amol1211/NoteWorthyNote",
    liveDemo: "https://noteworthynote.onrender.com",
    description:
      "A sticky notes app that allows user to create, read, update and delete notes.",
  },
  {
    title: "Speakify",
    image: miniproject3,
    github: "https://github.com/amol1211/Speakify",
    liveDemo: "https://speakify-6p5j.onrender.com",
    description:
      "A Text-To-Speech converter app which provides an easy way to listen to any text content user enters.",
  },
  {
    title: "TaskWise",
    image: miniproject4,
    github: "https://github.com/amol1211/TaskWise",
    liveDemo: "https://taskwise-ygza.onrender.com",
    description:
      "A task management app that allows users efficiently manage their tasks.",
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <p className={styles.sectionTextP1}>Browse My Recent</p>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.experienceDetailsContainer}>
        <div className={styles.aboutContainers}>
          {mainProjects.map((project, index) => (
            <div
              key={index}
              className={`${styles.detailsContainer} ${styles.colorContainer}`}
            >
              <div className={styles.articleContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImg}
                />
              </div>
              <h2
                className={`${styles.experienceSubTitle} ${styles.projectTitle}`}
              >
                {project.title}
              </h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.btnContainer}>
                <button
                  className={`${styles.btn} ${styles.btnColor2} ${styles.projectBtn}`}
                  onClick={() => window.open(project.github, "_blank")}
                >
                  Github
                </button>
                <button
                  className={`${styles.btn} ${styles.btnColor2} ${styles.projectBtn}`}
                  onClick={() => window.open(project.liveDemo, "_blank")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.sectionTextP1}>Browse my</p>
      <h1 className={styles.title}>Mini Projects</h1>
      <div
        className={`${styles.experienceDetailsContainer} ${styles.gridContainer}`}
      >
        {miniProjects.map((project, index) => (
          <div
            key={index}
            className={`${styles.detailsContainer} ${styles.colorContainer}`}
          >
            <div className={styles.articleContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImg}
              />
            </div>
            <h2
              className={`${styles.experienceSubTitle} ${styles.projectTitle}`}
            >
              {project.title}
            </h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.btnContainer}>
              <button
                className={`${styles.btn} ${styles.btnColor2} ${styles.projectBtn}`}
                onClick={() => window.open(project.github, "_blank")}
              >
                Github
              </button>
              <button
                className={`${styles.btn} ${styles.btnColor2} ${styles.projectBtn}`}
                onClick={() => window.open(project.liveDemo, "_blank")}
              >
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
