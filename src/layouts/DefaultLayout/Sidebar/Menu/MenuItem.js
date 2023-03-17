import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, activeIcon }) {
    // const [active, setActive] = useState(true);
    // const [activeIcons, setActiveIcons] = useState(false);
    // const handleOnclick = () => {
    //     setActive(false) ;
    //     setActiveIcons(true)
    // };
    return (
        <NavLink
            className={(nav) => cx("menu-item", { active: nav.isActive })}
            to={to}
            // onClick={handleOnclick}
        >
            {/* {active && icon}
            {activeIcons && activeIcon} */}
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
};
export default MenuItem;
