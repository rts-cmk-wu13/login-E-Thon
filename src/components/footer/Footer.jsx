import { useLocation } from "react-router";
import ButtonLink from "../buttons/ButtonLink";
import "./_Footer.scss";

export default function Footer() {
    const location = useLocation()

    return (
        <>
            {/* Conditional rendering */}
            {(location.pathname === "/" || location.pathname === "/signup") && (<ButtonLink
                to="/signup"
                className="signup blueBtn" 
                text="Sign Up"
                />)}
            {location.pathname === "/" && (<ButtonLink
                to="/login"
                className="login whiteBtn"
                text="Login ->"
            />)}
        </>
    )
}