import React, { FC } from "react";
import s from "./styles.module.css";
import Link from "components/Link";
const Menu: FC = () => {
  return (
    <div className={s.menu}>
      <Link to="/">Chat</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default Menu;
