import "./works.scss"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { useState } from "react";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            title: "UniqueSkills",
            img: "assets/cs1.png",
            link: "https://docs.google.com/presentation/d/10rRk6sNlQ-apBXCwOkqZdY4DaRRi5nrdR8aVwGJLvtY/edit?usp=sharing"
        },
         {
            id: "2",
            title: "Snack Capsule",
            img: "assets/cs2.png",
            link: "https://docs.google.com/presentation/d/1VtqY6ABhrGhwLlijl0AN-RiVsqNptMYH2YBDgWKN-dw/edit?usp=sharing"
        },
        
        
    ];
    const handleClick = (way)=>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) 
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide +1 : 0);
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
                {data.map(d=>(

                
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <HourglassEmptyIcon className="icon"/>
                                </div>
                                <h2>{d.title}</h2>
                                <p> Thank you for your time reviewing my work! Click below, if you’d like to see more:</p>
                                <span> <a target="_blank" href={d.link}>Link to the presentation</a> </span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                    
                </div>))}
            </div>
            
            <ChevronLeftIcon className="arrow left" onClick={() => handleClick("left")}/>
            <ChevronRightIcon className="arrow right" onClick={() => handleClick()}/>
        </div>
    )
}
