import "./portfolioList.scss"

export default function PortfolioList({id,title, active, setSelected}) {
    return (
        <li className={active ? "uniqueskills active" : "snackcapsule"} 
            onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
