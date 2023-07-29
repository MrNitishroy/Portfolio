import "./TaskbarStyle.css";
import about from "../Assets/Icons/person.svg";
import education from "../Assets/Icons/education.svg";
import experience from "../Assets/Icons/bag4.svg";
import project from "../Assets/Icons/project.svg";
import resume from "../Assets/Icons/resume.svg";
import contact from "../Assets/Icons/contact.svg";
import theme from "../Assets/Icons/theme.png";
import { Link } from "react-router-dom";

function Taskbar() {
  const ThemeChange = () => {
    document.body.classList.toggle("orangeTheme");
  };
  return (
    <>
      <div className="Taskbar">
        <img
          className="taskIcon"
          onClick={ThemeChange}
          src={theme}
          alt="About"
        />
        <Link to="/">
          <img className="taskIcon" src={about} alt="About" />
        </Link>
        <Link to="/education">
          <img className="taskIcon" src={education} />
        </Link>
        <Link to="/resume">
        <img className="taskIcon" src={resume} />
        </Link>
        <Link to="/projects">
        <img className="taskIcon" src={project} />
        </Link>
        <Link to="/contact">
        <img className="taskIcon" src={contact} />
        </Link>
      </div>
    </>
  );
}
export default Taskbar;
