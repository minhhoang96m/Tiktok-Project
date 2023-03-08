import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { forwardRef } from "react";
const cx = classNames.bind(styles);
const Button = forwardRef(({
    to,
    href,
    children,

    primary = false,
    outline = false,
    text = false,
    large = false,
    rounded = false,
    small = false,
    disabled = false,
    onClick,
    refPlus,
    className,
    icon,
    ...passProps
},ref) =>  {
    let Comp = "button";

    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }

    const classes = cx("wrapper", {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        className,
    });
    return (
        <Comp className={classes} {...props} ref={ref}>
            {icon && <span className={cx("icon")}>{icon}</span>}
            <span>{children}</span>
        </Comp>
    );
})

export default Button;
