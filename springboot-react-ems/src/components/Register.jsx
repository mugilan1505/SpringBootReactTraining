import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [roleName, setRoleName] = useState("");

    async function handleRegister(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3004/api/auth/register", {
                name,
                email,
                password,
                userName,
                roleName
            });
            console.log("Register Response", response.data);
            alert("Registration Successful");
        } catch (error) {
            console.log("Registration Error", error);
        }
        console.log("Form Submitted");
    }

    return (
        <div>
            <h1>Register</h1>
            <div>
                <form onSubmit={handleRegister}>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" onChange={(e) => setName(e.target.value)} />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <label htmlFor="userName">User Name</label>
                    <input id="userName" name="userName" type="text" onChange={(e) => setUserName(e.target.value)} />
                    <br />
                    <label htmlFor="roleName">Role Name</label>
                    <input id="roleName" name="roleName" type="text" onChange={(e) => setRoleName(e.target.value)} />
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;