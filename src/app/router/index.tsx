import React, { FC, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Chat from "route/Chat";
import Settings from "route/Settings";
import Menu from "app/Menu";
import Dialog from "components/Dialog";
import Snackbar from "app/Snackbar";
import { ApplicationState } from "app/types";
import { connect } from "react-redux";
const Router: FC<Props> = ({ settings }) => {
  const { users, theme } = settings;
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(p => !p);
  };
  const sbMsg = `${users[users.length - 1]} is joined to chat`;

  // theme switch. Not good but this approach can live here ;)
  useEffect(() => {
    const body = document.querySelector("body");
    if (body && theme === "dark") {
      body.classList.add("dark");
    } else {
      body?.classList.remove("dark");
    }
  }, [settings]);

  // for snackbar updates with new users joining
  useEffect(() => {
    setOpen(true);
  }, [users]);
  return (
    <main>
      <Menu />
      <Switch>
        <Route exact path="/" component={Chat} />
        <Route path="/settings" component={Settings} />
        <Dialog />
        {/*users.length > 0 ? (
        <Snackbar open={isOpen} handleClose={handleClose} message={sbMsg} />
      ) : null */}
      </Switch>
    </main>
  );
};
const mapStateToProps = ({ settings }: ApplicationState) => ({
  settings
});
export default connect(mapStateToProps)(Router);

interface Props {
  settings: any;
}
