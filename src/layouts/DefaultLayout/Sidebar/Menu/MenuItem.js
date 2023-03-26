import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, activeIcon }) {

    return (
        <NavLink
            className={(nav) => cx("menu-item", { active: nav.isActive })}
            to={to}
       
        >
           
            <span className={cx("icon")}>{icon}</span>
            <span className={cx("active-icon")}>{activeIcon}</span>
            <h2 className={cx("menu-item--text")}>{title}</h2>
        </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon : PropTypes.node.isRequired,
};
export default MenuItem;
