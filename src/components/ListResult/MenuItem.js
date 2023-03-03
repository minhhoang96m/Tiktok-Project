import Button from "../Button";
import styles from "./Menu.module.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx("menu-item")} icon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
