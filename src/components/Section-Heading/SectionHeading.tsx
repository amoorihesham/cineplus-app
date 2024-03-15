import "./style.css";
import { SectionHeadingProps } from "../../types/props-types";
const SectionHeading = ({ heading, text, highlight }: SectionHeadingProps) => {
  return (
    <div className="section-heading mb-5">
      <h3>
        {heading} <span>{highlight}</span>
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default SectionHeading;
