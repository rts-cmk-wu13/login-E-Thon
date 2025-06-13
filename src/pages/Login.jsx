import { Form, useLocation, useNavigate } from "react-router"
import { useAuth } from "../contexts/AuthContext"
import { useState } from "react"
import ButtonLink from "../components/buttons/ButtonLink"
import Formgroup from "../components/formgroup/formgroup"
import { FaArrowRight } from "react-icons/fa"
import LogoLink from "../components/logo/LogoLink"
import "./_Login.scss";

export default function Login() {
    const [error, setError] = useState(null)
    const { login } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"

    async function handleLogin(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        // validér her...

        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify(data),
        })
        const userdata = await response.json()

        if (!response.ok) {
            setError(userdata.message || userdata.error || "Please provide login informations")
        } else {
            login(userdata.accessToken)
            navigate(from, { replace: true })
        }

    }
    // for browser try, use email: clu@mail.dk , password: 123456
    return (
        <>
            <h1>Login</h1>
            <LogoLink />
            <Form onSubmit={handleLogin}>
                <Formgroup
                    type="text"
                    text="username"
                    placeholder="Email address"
                />
                <Formgroup
                    type="password"
                    text="password"
                    placeholder="Password"
                />
                {error && (<div>{error}</div>)}
                {location.pathname === "/login" && (<ButtonLink
                    to="/login"
                    className="loginBtn blueBtn"
                    text={
                        <>
                            Login <FaArrowRight />
                        </>
                    }
                />)}
            </Form>
        </>
    )
}