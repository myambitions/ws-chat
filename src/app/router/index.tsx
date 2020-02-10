import React, { FC } from "react";
import { Route } from "react-router-dom";
import Chat from "route/Chat";
import Settings from "route/Settings";
import Menu from "app/Menu";
const Router: FC = () => {
  return (
    <main>
      <Menu />
      <Route exact path="/" component={Chat} />
      <Route path="/settings" component={Settings} />
    </main>
  );
};

export default Router;
