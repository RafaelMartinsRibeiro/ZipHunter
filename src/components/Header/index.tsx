import { GiFlyingTarget } from "react-icons/gi";

import "./styles.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <span>Zip</span>Hunter
      </div>
      <GiFlyingTarget />
    </div>
  );
};
