import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [roleNames, setRoles] = useState("");

  async function addNewEmployee(e) {
    e.preventDefault();
    try {
      const roleArray = roleNames.split(",").map((role) => role.trim());
      const req = await axios.post("http://localhost:8080/api/auth/register", {
        name,
        email,
        password,
        userName,
        roleNames: roleArray,
      });

      if (req.data) {
        alert("✅ " + req.data);
      } else {
        alert("❌ Error during Sign up");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong!");
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          maxWidth: "450px",
          width: "100%",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.95)",
        }}
      >
        <div className="card-body p-4">
          <h3 className="text-center text-primary fw-bold mb-3">
            Create an Account
          </h3>
          <p className="text-center text-muted mb-4">
            Fill in the details to sign up
          </p>

          <form onSubmit={addNewEmployee}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-pill"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control form-control-lg rounded-pill"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-pill"
                placeholder="Choose a username"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control form-control-lg rounded-pill"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Roles</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-pill"
                placeholder="e.g. ROLE_USER, ROLE_ADMIN"
                value={roleNames}
                onChange={(e) => setRoles(e.target.value)}
              />
            </div>

            <div className="d-grid mt-4">
              <button
                type="submit"
                className="btn btn-primary btn-lg rounded-pill"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-center mt-4 mb-0">
            Already a user?{" "}
            <Link to="/login" className="text-decoration-none fw-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
