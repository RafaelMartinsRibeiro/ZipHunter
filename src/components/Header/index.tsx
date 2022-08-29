import { GiFlyingTarget } from "react-icons/gi";

import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <span>Zip</span>Hunter
      </div>
      <GiFlyingTarget />
    </header>
  );
};
