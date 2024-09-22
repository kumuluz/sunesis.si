import * as PropTypes from "prop-types";
import { useI18next } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import chevron from "../../../assets/images/services/chevron.svg";
import { Link } from "../../link/link.component";

/**
 *
 * @param title
 * @param desc
 * @param {string[]} services
 * @return {JSX.Element}
 * @constructor
 */
export function ServiceFullListItem({ title, desc, cta, services, end }) {
  const { t } = useI18next("services");
  const [opened, toggleOpened] = useState(false);

  function rotateChevron(opened) {
    if (opened) {
      return { transform: "rotate(90deg)" };
    }
    return {};
  }

  function changeState() {
    toggleOpened((prevState) => !prevState);
  }

  const replaceNewLines = (tekst) => {
    return tekst.replace(new RegExp(/\n/, "g"), "<br/>");
  };

  return (
    <li>
      <div className="flc-title" onClick={changeState}>
        <div className="caret">
          <img src={chevron} style={rotateChevron(opened)} />
        </div>
        <div className="title">{title}</div>
      </div>
      <div
        className={opened ? "flc-desc changeable-content" : "flc-desc skrito changeable-content"}
        dangerouslySetInnerHTML={{ __html: replaceNewLines(desc) }}
      ></div>
      {cta && opened && (
        <div className="d-flex ml-5">
          <p className="mr-2">{cta.title}</p>
          <Link to={cta.link}>{cta.text}</Link>
        </div>
      )}
      <div className={opened ? "flc-list" : "flc-list skrito"}>
        {services &&
          services.map((service, j) => (
            <div key={j} className="flc-list-item">
              <div className="blue-box"></div>
              <div className="serv-desc">{t(service)}</div>
            </div>
          ))}
      </div>
      {end && opened && (
        <div className="d-flex ml-5 flc-list-item">
          <p className="serv-desc flc-list-item">{end}</p>
        </div>
      )}
    </li>
  );
}

ServiceFullListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  services: PropTypes.array,
};
