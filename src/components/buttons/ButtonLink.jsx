import { Link, useLocation } from "react-router"

export default function ButtonLink({to, text, className}){
    const location = useLocation()
    return (
        <Link to={to} className={className} 
             type={location.pathname === "/login" ? "submit" : "button"}
        >{text}</Link>
    )
}