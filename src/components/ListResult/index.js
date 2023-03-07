import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

import { Dropper as PopperDropper } from "../Dropper";
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles);
function Menu({ children, items = [] , onChange}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const render = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item)
                        }
                    }}
                />
            );
        });
    };
    
    return (
        <Tippy
            interactive
            // visible
            delay={[0,400]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx("menu-live")} tabIndex="-1" {...attrs}>
                    <PopperDropper className={cx("menu-lives")}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((pre) =>
                                        pre.slice(0, pre.length-1)
                                    );
                                }}
                            />
                        )}
                        {render()}
                    </PopperDropper>
                </div>
            )}
            onHide={() => setHistory(pre => pre.slice(0,1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
