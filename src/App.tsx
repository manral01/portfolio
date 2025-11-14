import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";

import ComingSoon from "./components/ComingSoon/ComingSoon";
import Footer from "./components/Footer/Footer";

import About from "./modules/About/About";
import WorkExperience from "./modules/WorkExperience/WorkExperience";
import Skills from "./modules/Skills/Skills";
import Projects from "./modules/Projects/Projects";
import Profile from "./modules/Profile/Profile";
import Resume from "./modules/Resume/Resume";
import TileGrid from "./components/TitleGrid/TitleGrid";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

const App = () => {
  return (
    <>
      <ThemeToggle />
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TileGrid />
              <ComingSoon
                title={
                  "Site is under development !! Bare with me for sometime Thanks.."
                }
              />
              <Footer />
            </>
          }
        />

        {/* BUILT PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<WorkExperience />} />
        <Route path="/skills" element={<Skills />} />

        {/* COMING SOON PAGES */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/profiles" element={<Profile />} />

        {/* RESUME PAGE WITH VIEW + DOWNLOAD */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default App;
