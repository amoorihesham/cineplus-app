import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e: FormEvent) => {
    const user = {
      firstName: fName,
      lastName: lName,
      email,
      password,
    };
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:2024/api/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast("Account Registered Successfully.", {
        type: "success",
      });
      navigate("/login");
    } catch (error: any) {
      const {
        data: { message },
      } = error.response;
      setErrors(message);
    }
  };
  return (
    <div className="register-page  py-5">
      <div className="container">
        <form className="w-50 mx-auto">
          <div className="form-group mb-3">
            <label htmlFor="fName" className="text-white mb-2 fw-bold">
              First Name:
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="fName"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="lName" className="text-white mb-2 fw-bold">
              Last Name:
            </label>
            <input
              type="text"
              required
              className="form-control"
              id="lName"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
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
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
