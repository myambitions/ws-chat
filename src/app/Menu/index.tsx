import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "app/types";
import Link from "components/Link";
import Badge from "components/Badge";
import s from "./styles.module.css";
const Menu: FC<Props> = ({
  settings: { language },
  router: {
    location: { pathname }
  }
}) => {
  const [translations, setTranslations] = useState();
  useEffect(() => {
    setTranslations(require(`translations/${language}.json`));
  }, [language]);
  if (!translations) return null;
  return (
    <div className={s.menu}>
      <Badge className={s.badge}>
        <Link exact to="/" activeClassName={s.active}>
          {translations.chat}
        </Link>
      </Badge>
      <Link to="/settings" activeClassName={s.active}>
        {translations.settings}
      </Link>
    </div>
  );
};
const mapStateToProps = ({ settings, router }: ApplicationState) => ({
  settings,
  router
});
export default connect(mapStateToProps)(Menu);

interface Props {
  settings: any;
  router: any;
}
