import React from "react";
import {Link as ReactLink} from "gatsby-plugin-react-i18next";
import PropTypes from "prop-types";

export function Link(props) {
    const {to, external, children, ...otherProps} = props;
    
    if (external) {
        return (
            <a href={to} target="_blank" rel="noreferrer noopener" {...otherProps}>
                {children}
            </a>
        );
    }
    
    return (
        <ReactLink to={to} {...otherProps}>
            {children}
        </ReactLink>
    );
}

Link.propTypes = {
    to: PropTypes.string,
    children: PropTypes.any,
    external: PropTypes.bool,
}

Link.defaultProps = {
    external: false,
}
