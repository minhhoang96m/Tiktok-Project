import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, {MenuItem} from './Menu';
import { IconHome, IconLive, IconUserGroup } from '~/components/Icon';
import config from "~/config";

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem  title='For You' icon={<IconHome />} to={config.routes.home}/>
                <MenuItem  title='Following' icon={<IconUserGroup />} to={config.routes.following}/>
                <MenuItem  title='LIVE' icon={<IconLive />} to={config.routes.live}/>
            </Menu>
        </aside> 
    )
}

export default Sidebar;
