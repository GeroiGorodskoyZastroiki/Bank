import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() { 
    return (
        <div className="headerDiv">
            <Link to="/profile" className="link"><h1>Profile</h1></Link>
            <Link to="/profile" className="link"><h1>Loans</h1></Link>
            <Link to="/profile" className="link"><h1>Payments</h1></Link>
            
        </div>
    )
}