import React, { useEffect, useState } from "react";
import * as PropTypes from "prop-types";
import { useI18next } from "gatsby-plugin-react-i18next";

import { products as kumuluzDigitalProducts } from "../../content/products";
import { navigationLinks } from "../../content";
import { Link } from "../link/link.component";

import "./sub-navbar.scss";

export function SubNavbar({ nav }) {
  const { t } = useI18next();
  const [state, setState] = useState({
    width: 0,
    height: 0,
    index: 0,
  });

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const { width, index } = state;

  const bigEnough = width > 1500;

  let content = [];
  if (nav) {
    content = navigationLinks.find((n) => n.href.includes(nav)).children;
  } else {
    content = kumuluzDigitalProducts;
  }

  const leftArray = content.slice(index);
  const rightArray = content.slice(0, index);

  function updateWindowDimensions() {
    setState((prevState) => {
      return {
        ...prevState,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    });
  }

  function toRight(t, content) {
    if (index === content.length) {
      setState((prevState) => {
        return {
          ...prevState,
          index: 1,
        };
      });
    } else {
      setState((prevState) => {
        return {
          ...prevState,
          index: prevState.index + 1,
        };
      });
    }
  }

  function toLeft(t, content) {
    if (index === 0) {
      setState((prevState) => {
        return {
          ...prevState,
          index: content.length - 1,
        };
      });
    } else {
      setState((prevState) => {
        return {
          ...prevState,
          index: prevState.index - 1,
        };
      });
    }
  }

  function isActive(product) {
    if (typeof window !== "undefined") {
      if (window.location.pathname === product.href || window.location.pathname === product.href + "/") {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="subheader position-relative d-flex">
      {!bigEnough && (
        <div className="nav-left-right position-absolute" onClick={() => toRight(t, content)}>
          &#60;
        </div>
      )}
      <div className={"d-flex align-items-center justify-content-center w-100 " + (bigEnough ? "mx-auto" : "")}>
        {leftArray.map((prod, i) => (
          <div key={i} className="text-center">
            <Link to={prod.href} external={false} className={isActive(prod) ? (prod.id ? prod.id : "active") : ""}>
              {t(prod.name)}
            </Link>
          </div>
        ))}
        {rightArray.map((prod, i) => (
          <div key={i}>
            <Link to={prod.href} external={false} className={isActive(prod) ? (prod.id ? prod.id : "active") : ""}>
              {t(prod.name)}
            </Link>
          </div>
        ))}
      </div>
      {!bigEnough && (
        <div className="nav-left-right right position-absolute" onClick={() => toLeft(t, content)}>
          &#62;
        </div>
      )}
    </div>
  );
}

SubNavbar.propTypes = {
  transformation: PropTypes.any,
  nav: PropTypes.any,
};
