import React from "react";
import htmlIcon from "../../assets/html5.svg";
import cssIcon from "../../assets/css3.svg";
import jsIcon from "../../assets/javascript.svg";
import tsIcon from "../../assets/typescript.svg";
import cIcon from "../../assets/cprogrammingIcon.svg";
import cppIcon from "../../assets/cplusplus.svg";
import mongoIcon from "../../assets/mongodb.svg";
import expressIcon from "../../assets/express.svg";
import reactIcon from "../../assets/react.svg";
import nodeIcon from "../../assets/nodedotjs.svg";
import mysqlIcon from "../../assets/mysql.svg";
import sqlIcon from "../../assets/sql.svg";
import tailwindIcon from "../../assets/tailwindcss.svg";
import reduxIcon from "../../assets/redux.svg";
import postmanIcon from "../../assets/postman.svg";
import insomniaIcon from "../../assets/insomnia.svg";
import restApiIcon from "../../assets/rest-api.svg";
import shellScriptIcon from "../../assets/gnubash.svg";
import mongooseIcon from "../../assets/mongoose.svg";
import gitIcon from "../../assets/git.svg";
import vscodeIcon from "../../assets/vscodeIcon.svg";
import firebaseIcon from "../../assets/firebase-svgrepo-com.svg";
import jwtIcon from "../../assets/jsonwebtokens.svg";
import styles from "./SkillsStyles.module.css";

const skills = {
  languages: [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "C", icon: cIcon },
    { name: "C++", icon: cppIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "Shell Script", icon: shellScriptIcon },
    { name: "TypeScript", icon: tsIcon },
  ],
  frameworks: [
    { name: "ReactJS", icon: reactIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "NodeJS", icon: nodeIcon },
    { name: "ExpressJS", icon: expressIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Mongoose", icon: mongooseIcon },
  ],
  databases: [
    { name: "MongoDB", icon: mongoIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Firebase", icon: firebaseIcon },
  ],
  tools: [
    { name: "Git", icon: gitIcon },
    { name: "Postman", icon: postmanIcon },
    { name: "Insomnia", icon: insomniaIcon },
    { name: "JWT", icon: jwtIcon },
    { name: "REST API", icon: restApiIcon },
    { name: "VS Code", icon: vscodeIcon },
  ],
};

const Skills = () => (
  <section className={styles.skillsSection}>
    <h1 className={styles.sectionTitle}>Skills</h1>
    {Object.keys(skills).map((category) => (
      <div key={category} className={styles.category}>
        <h3 className={styles.categoryTitle}>
          {category === "frameworks"
            ? "Frameworks/Libraries"
            : category === "tools"
            ? "Tools/Technologies"
            : category.charAt(0).toUpperCase() + category.slice(1)}
        </h3>
        <div className={styles.skillsGrid}>
          {skills[category].map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <img
                src={skill.icon}
                alt={skill.name}
                className={styles.skillIcon}
              />
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Skills;
