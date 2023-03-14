// import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon }) {
    return (
        <NavLink className={(nav) => cx("menu-item", { active : nav.isActive })} to={to}>
            {icon}
            <h2 className={cx("menu-item--text")}>{title}</h2>
        </NavLink>
    );
}
// MenuItem.propTypes = {
//     title : PropTypes.string.isRequired,
//     to : PropTypes.string.isRequired,
//     icon : PropTypes.node.isRequired,
// }
export default MenuItem;
