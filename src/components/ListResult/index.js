import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";

import { Dropper as PopperDropper } from "../Dropper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const render = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            visible
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx("menu-live")} tabIndex="-1" {...attrs}>
                    <PopperDropper className={cx("menu-lives")}>{render()}</PopperDropper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
