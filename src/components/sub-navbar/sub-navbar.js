import React, { useEffect, useState, useRef } from "react";
import * as PropTypes from "prop-types";
import { useI18next } from "gatsby-plugin-react-i18next";

import { navigationLinks } from "../../content";
import { Link } from "../link/link.component";

import "./sub-navbar.scss";

export function SubNavbar({ nav }) {
  const { t } = useI18next();
  const [isScrollable, setIsScrollable] = useState(false);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const activeLinkRef = useRef(null);

  useEffect(() => {
    updateScrollable();
    window.addEventListener("resize", updateScrollable);
    return () => {
      window.removeEventListener("resize", updateScrollable);
    };
  }, []);

  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [nav]);

  function updateScrollable() {
    if (scrollContainerRef.current) {
      const isScroll = scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth;
      setIsScrollable(isScroll);
    }
  }

  function scrollToRight() {
    const activeNav = navigationLinks.find((n) => n.href.includes(nav));
    if (scrollContainerRef.current && activeNav) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth / activeNav.children.length,
        behavior: "smooth",
      });
    }
  }

  function scrollToLeft() {
    const activeNav = navigationLinks.find((n) => n.href.includes(nav));
    if (scrollContainerRef.current && activeNav) {
      scrollContainerRef.current.scrollBy({
        left: -(scrollContainerRef.current.clientWidth / activeNav.children.length),
        behavior: "smooth",
      });
    }
  }

  function isActive(product) {
    if (typeof window !== "undefined") {
      return window.location.pathname === product.href || window.location.pathname === product.href + "/";
    }
    return false;
  }

  const activeNav = navigationLinks.find((n) => n.href.includes(nav));
  if (!activeNav) {
    return null;
  }

  return (
    <div className="subheader" ref={containerRef}>
      {isScrollable && (
        <div className="nav-left-right" onClick={scrollToLeft}>
          &#60;
        </div>
      )}
      <div className="subheader-scrollable" ref={scrollContainerRef}>
        {activeNav.children.map((prod, i) => (
          <Link
            key={i}
            to={prod.href}
            external={false}
            className={isActive(prod) ? "active" : ""}
            ref={isActive(prod) ? activeLinkRef : null}
          >
            {t(prod.name)}
          </Link>
        ))}
      </div>
      {isScrollable && (
        <div className="nav-left-right right" onClick={scrollToRight}>
          &#62;
        </div>
      )}
    </div>
  );
}

SubNavbar.propTypes = {
  nav: PropTypes.string.isRequired,
};
