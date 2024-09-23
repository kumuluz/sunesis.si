import React, { forwardRef } from "react";
import { Link as ReactLink } from "gatsby-plugin-react-i18next";
import PropTypes from "prop-types";

function Link({ to, external, children, ...otherProps }, ref) {
  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer noopener" ref={ref} {...otherProps}>
        {children}
      </a>
    );
  }

  return (
    <ReactLink to={to} ref={ref} {...otherProps}>
      {children}
    </ReactLink>
  );
}

const ForwardedLink = forwardRef(Link);

ForwardedLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
};

ForwardedLink.defaultProps = {
  external: false,
};

export { ForwardedLink as Link };
