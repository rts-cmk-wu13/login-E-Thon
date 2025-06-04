import { useLocation } from "react-router"
import LogoutBtn from "../buttons/logout/LogoutBtn"
import ButtonLink from "../buttons/ButtonLink"

export default function Header() {
    const location = useLocation()

    return (
        <>
            {/* Conditional rendering */}
            {(location.pathname === "/statements" || location.pathname === "/secrets") && (<LogoutBtn 
            className="logout blue"/>)}
            {(location.pathname === "/login" || location.pathname === "/signup") && (<ButtonLink
                to="/"
                className="backarrow blue"
                text="<-"
            />)}
        </>
    )
}