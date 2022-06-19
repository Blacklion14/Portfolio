import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    <img className='logoImage' src="logo512.png" alt='Logo'/>
                </Link>
            </div>
            <div className='link'>
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
                <Link to="/mode">
                    <div className="header_option">
                        <span className="contact_optionLineOne">Mode</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
