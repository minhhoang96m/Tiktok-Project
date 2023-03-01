import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/86fd7660037e6587340b4cc919516bb5~c5_100x100.jpeg?x-expires=1677934800&x-signature=2lMXWih3jTILB%2BI6xPvT21IjWlE%3D"
                alt="Hoa"
            />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span> Nguyen Van A </span>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx("username")}> Nguyenvana </span>
            </div>
        </div>
    );
}

export default AccountItem;
