import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Profile />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
