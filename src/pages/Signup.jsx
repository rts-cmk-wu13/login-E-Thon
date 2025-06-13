import { Form, useActionData } from "react-router"
import Formgroup from "../components/formgroup/formgroup";

export default function Signup() {
    const errors = useActionData();

    return (
        <>
            <h1>Contact</h1>
            <Form method="post">
                <Formgroup
                    type="email"
                    text="email"
                    placeholder="Email address"
                />
                <Formgroup
                    type="text"
                    text="username"
                    placeholder="Username"
                />
                <Formgroup
                    type="password"
                    text="password"
                    placeholder="Password"
                />
                <Formgroup
                    type="password"
                    text="password"
                    placeholder="Confirm Password"
                />
                {errors && (<div>{errors}</div>)}
            </Form>
        </>
    )
}


