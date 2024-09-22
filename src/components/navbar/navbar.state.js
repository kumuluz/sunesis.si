import { useEffect, useState } from "react";
import { MEDIA_TABLET, returnScreenSize } from "../../layouts/common";
import sunesisLogo from "./sunesis-logo.svg";
import sunesisWhiteLogo from "./sunesis-logo-white.svg";

function getLogo() {
  const screenSize = returnScreenSize();

  if (screenSize > MEDIA_TABLET) {
    return sunesisLogo;
  }
  return sunesisWhiteLogo;
}

export function useNavbarState() {
  const [state, setter] = useState({
    isOpen: false,
    dropdownOpenIndex: null,
  });

  function onWindowResize() {
    setter((prevState) => {
      return {
        ...prevState,
        sunesisLogo: getLogo(),
      };
    });
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      onWindowResize();
      window.addEventListener("resize", onWindowResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", onWindowResize);
      }
    };
  }, []);

  return {
    navbarState: state,
    toggle: function () {
      setter((prevState) => {
        return {
          ...prevState,
          isOpen: !prevState.isOpen,
        };
      });
    },
    toggleDropdown: function (index) {
      setter((prevState) => {
        return {
          ...prevState,
          dropdownOpenIndex: prevState.dropdownOpenIndex === index ? null : index,
        };
      });
    },
    closeMobileMenu: function () {
      setter((prevState) => {
        const screenSize = returnScreenSize();
        if (screenSize <= MEDIA_TABLET) {
          return {
            ...prevState,
            isOpen: false,
          };
        }
        return prevState;
      });
    },
    linkActive: function (path) {
      if (typeof window !== "undefined") {
        const pathnameWithoutLang = window.location.pathname.replace(/^\/[a-z]{2}\//, "/"); // Remove language prefix like /en/, /fr/, etc.

        if (pathnameWithoutLang.includes(path)) {
          if (pathnameWithoutLang === path || pathnameWithoutLang === path + "/") {
            return "active";
          }
          return "active plus position-relative";
        }
      }
      return "";
    },
  };
}
