import "./topbar.scss"
import { Person,Mail } from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="toolbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Nhat Anh</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+1234567</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>nhatanh1nguyen@gmail.com</span>
                    </div>
                </div>
                <h1>Hi</h1>
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