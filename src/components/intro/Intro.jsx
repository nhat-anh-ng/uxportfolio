import "./intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1200,
            backSpeed:50,
            showCursor: true,
            strings: ["Google UX Design", "Certificate Portfolio"]
        });
    }, []);
    return (
        <div className="intro" id="intro">
           
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Nhat Anh Nguyen</h1>
                    <h3>welcome to my <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                   <ExpandMoreIcon className="icon"/>
                </a>
            </div>
        </div>
    )
}
