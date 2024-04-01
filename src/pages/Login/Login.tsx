import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { json } from "stream/consumers";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:2024/api/login",
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast("Logged In", {
        type: "success",
      });
      localStorage.setItem("user", JSON.stringify(data?.data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page py-5">
      <div className="container">
        <form className="w-50 mx-auto">
          <div className="form-group mb-3">
            <label htmlFor="email" className="text-white mb-2 fw-bold">
              Email:
            </label>
            <input
              type="email"
              required
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-white mb-2 fw-bold">
              Password:
            </label>
            <input
              type="password"
              required
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn main-bg text-white w-100 mt-4"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
