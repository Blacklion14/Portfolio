import "./Header.css";
import { Link } from "react-router-dom";
import { MdDarkMode , MdLightMode } from "react-icons/md";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';

function Header() {
  const [cookies , setCookie] = useCookies(['state']);

  useEffect(()=>{
    if(cookies.state !== undefined){
      if (cookies.state === "true") {
        document.querySelector('.darkMode').style.display = 'block';
        document.querySelector('.lightMode').style.display = 'none';
        document.body.classList.add("dark-theme");
      } else {
        document.querySelector('.darkMode').style.display = 'none';
        document.querySelector('.lightMode').style.display = 'block';
        document.body.classList.remove("dark-theme");
      }
    } else {
      document.querySelector('.darkMode').style.display = 'none';
      document.querySelector('.lightMode').style.display = 'block';
      document.body.classList.remove("dark-theme");
    }
  }, [])

  function changeMode() {
    if(document.querySelector('.darkMode').offsetParent){
          document.querySelector('.darkMode').style.display = 'none';
          document.querySelector('.lightMode').style.display = 'block';
          document.body.classList.remove("dark-theme");
          //save in cookie
          setCookie("state", "false", 30);
    } else {
          document.querySelector('.darkMode').style.display = 'block';
          document.querySelector('.lightMode').style.display = 'none';
          document.body.classList.add("dark-theme");
          //save in cookie
          setCookie("state", "true", 30);
    }
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img className="logoImage" src="logo512.png" alt="Logo" />
        </Link>
      </div>
      <div className="link">
        <Link to="/projects">
          <div className="header_option">
            <span className="projects_optionLineOne">Projects</span>
          </div>
        </Link>
        <Link to="/Resume">
          <div className="header_option">
            <span className="resume_optionLineOne">Resume</span>
          </div>
        </Link>
        <Link to="/About">
          <div className="header_option">
            <span className="about_optionLineOne">About</span>
          </div>
        </Link>
        <Link to="/Contact">
          <div className="header_option">
            <span className="contact_optionLineOne">Connect</span>
          </div>
        </Link>
        <div className="header_option mode" onClick={changeMode}>
          <span className="lightMode"><MdDarkMode/></span>
          <span className="darkMode"><MdLightMode/></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
