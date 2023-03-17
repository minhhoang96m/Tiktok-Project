import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss';
import Header from "~/layouts/components/Header";
import Sidebar from "./Sidebar";
import CenterContent from "./CenterContent";


const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                    <CenterContent />
                    </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
