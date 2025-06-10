import { Link } from "react-router";
import "./_LogoLink.scss";

export default function LogoLink() {

    return (
        <Link to="/">
            <img src="emojione_bird.svg" alt="early bird logo linking to homepage" className="LogoLink"/>
        </Link>
    )
}