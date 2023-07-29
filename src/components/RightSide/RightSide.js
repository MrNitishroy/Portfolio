import { AboutPage } from "../../Pages/About/About";
import { ContactUs } from "../../Pages/ContactUs/ContactUs";
import { Education } from "../../Pages/Education/Education";
import { Projects } from "../../Pages/Projects/Projects";
import { Resume } from "../../Pages/Resume/Resume";
import "./RightSide.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export function RightSide() {
  return (
    <div className="rghtBox">
      {/* <Projects /> */}
      {/* <ContactUs/> */}
      {/* <Resume/>  */}
      {/* <Education/> */}
      {/* <AboutPage/> */}
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
