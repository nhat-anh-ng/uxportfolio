import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { useState, useEffect } from "react";
import { uniqueSkills, snackCapsule } from "../../data";

export default function Portfolio() {
    const[selected, setSelected] = useState("uniqueskills");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "uniqueskills",
            title: "UniqueSkills",
        },
        {
           id: "snackcapsule",
           title: "Snack Capsule",
        },
    ];

    useEffect(()=>{

        switch(selected){
            case "uniqueskills":
                setData(uniqueSkills);
                break;
            case "snackcapsule":
                setData(snackCapsule);
                break;
            default:
                setData(uniqueSkills);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <div className="tabs">
                <h1>Case studies</h1>
                <ul>
                    {list.map((item)=>(
                        <PortfolioList 
                            title={item.title} 
                            active={selected === item.id} 
                            setSelected={setSelected}
                            id={item.id}
                            />
                    ))}
                </ul>
            </div>
            
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <img src={d.csimage} alt="" />
                    <h3>My role</h3>
                    <p>{d.role}</p>
                    <h3>Project Goal</h3>
                    <p>{d.goal}</p>
                    <h3>Target audience</h3>
                    <p>{d.audience}</p>
                    <h3>Key challenges</h3>
                    <p>{d.challenges}</p>
                    <h3>Research study details</h3>
                    <p>{d.research}</p>
                    <h3>Initial design concept</h3>
                    <img src={d.idc} alt="" />
                    <h3>Low-fidelity prototypes</h3>
                    <img src={d.lfp} alt="" />
                    <h3>High-fidelity prototypes</h3>
                    <img src={d.hfp} alt="" />
                    <h3>Conclusion</h3>
                    <p>{d.conclusion}</p>
                </div>
                 ))}
            </div>
           
        </div>
    )
}
