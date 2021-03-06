import "./topbar.scss"
import { Person,Mail } from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="toolbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Google UX Design </a>
                    <div className="itemContainer">
                        <a className="icon" href="https://www.linkedin.com/in/nhatanhng/"><LinkedInIcon /></a>
                        <span>LinkedIn</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>nhatanh1nguyen@gmail.com</span>
                    </div>
                </div>
               
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
