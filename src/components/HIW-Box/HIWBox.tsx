import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HIWBoxProps } from "../../types/props-types";
import "./style.css";

const HIWBox = ({
  boxColor,
  iconColor,
  scale,
  icon,
  title,
  text,
}: HIWBoxProps) => {
  return (
    <div className="step-box">
      <div
        className={`icon-box ${scale ? "scale-1" : ""} ${
          boxColor === "mainBlue" ? "main-bg" : "bg-pale-blue"
        }`}
      >
        <FontAwesomeIcon
          icon={icon}
          size="3x"
          className={`${
            iconColor === "default" ? "text-default" : "text-main-blue"
          }`}
        />
      </div>
      <div className="text text-center">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HIWBox;
