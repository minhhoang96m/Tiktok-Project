import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";
import {
    IconHome,
    IconHomeActive,
    IconLive,
    IconUserGroup,
    IconLiveActive,
    IconUserGroupActive,
} from "~/components/Icon";
import config from "~/config";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem
                    title="For You"
                    icon={<IconHome /> }
                    activeIcon = {<IconHomeActive />}
                    to={config.routes.home}
                />
                <MenuItem
                    title="Following"
                    icon={<IconUserGroup /> }
                    activeIcon = {<IconUserGroupActive />}
                    to={config.routes.following}
                />
                <MenuItem
                    title="LIVE"
                    icon={<IconLive />}
                    activeIcon = {<IconLiveActive />}
                    to={config.routes.live}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
