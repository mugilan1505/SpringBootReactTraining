import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const request = await axios.post("http://localhost:8080/api/auth/login", {
        userName,
        password,
      });

      const token = request.data.token;
      const role = request.data.roles;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      alert("✅ Login Successful");
      navigate("/");
    } catch (e) {
      console.log("Login Error", e);
      alert("❌ Invalid Credentials");
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background:
          "linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          maxWidth: "400px",
          width: "100%",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <div className="card-body p-4">
          <h3 className="text-center text-primary fw-bold mb-3">
            Welcome Back
          </h3>
          <p className="text-center text-muted mb-4">
            Login to continue to your account
          </p>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-pill"
                placeholder="Enter your username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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

            <div className="d-grid mt-4">
              <button
                type="submit"
                className="btn btn-primary btn-lg rounded-pill"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-center mt-4 mb-0">
            Don’t have an account?{" "}
            <Link to="/register" className="text-decoration-none fw-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
