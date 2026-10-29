import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("No account found. Please register first.");
      return;
    }

    if (
      loginData.email !== savedUser.email ||
      loginData.password !== savedUser.password
    ) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(savedUser));

    setMessage("Login successful!");

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back</h1>

        <p>Login to MediCare Hospital</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                password: e.target.value,
              })
            }
          />

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          {message && (
            <p className="success-message">
              {message}
            </p>
          )}

          <button type="submit">
            Login
          </button>

          <p className="auth-link">
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;