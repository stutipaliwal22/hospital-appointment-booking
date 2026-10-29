import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!user.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!user.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!user.password.trim()) {
      setError("Please enter your password.");
      return;
    }

    if (user.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    setMessage("Registration successful!");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>

        <p>Register with MediCare Hospital</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={user.name}
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email Address"
            value={user.email}
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) =>
              setUser({
                ...user,
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
            Register
          </button>
          <p className="auth-link">
  Already have an account? <Link to="/login">Login</Link>
</p>
        </form>
      </div>
    </section>
  );
}

export default Register;