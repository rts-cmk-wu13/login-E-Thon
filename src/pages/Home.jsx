import LogoLink from "../components/logo/LogoLink"
import "./_Home.scss";

export default function Home() {
    return (
        <>
            <LogoLink />
            <h1 className="title">early bird.</h1>
            <p>Your local discount mate</p>
        </>
    )
}