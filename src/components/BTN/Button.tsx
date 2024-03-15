import { ButtonCustProps } from "../../types/props-types";
import "./style.css";

const ButtonCust = ({ text, size }: ButtonCustProps) => {
  return (
    <button
      className={`btn main-bg text-white ${size === "sm" ? "btn-sm" : ""}`}
    >
      {text}
    </button>
  );
};

export default ButtonCust;
