import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const UserLoginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Construct the URL with email and password as query parameters
      const url = `http://localhost:3000/user?email=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(password)}`;

      const response = await fetch(url, {
        method: "POST",
      });

      const data = await response.json();

      // Check if the response contains a jwt_token
      if (response.ok && data.jwtToken) {
        // Store the token in cookies
        console.log(data.jwtToken);

        Cookies.set("jwt_token", data.jwtToken, { expires: 30 });

        // Redirect to /showdata
        navigate("/showdata");
      } else {
        // Handle invalid login (e.g., show error message)
        console.log("Invalid credentials or no token received.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLoginpage;
