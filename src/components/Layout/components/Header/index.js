import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';



const cx = classNames.bind(styles);
function Header() {
    return (<header className={cx('wrapper')} > 
    <div className={cx('inner')}>
    <div className={cx('logo')}>
        <img src={images.logo} alt='Tiktok'/>
    </div>
    <div className={cx('search')}>
    
    <input className={cx('search-input')} placeholder='Search accounts and videos' spellCheck={false} />
    <button className={cx('search-close')}>
        <FontAwesomeIcon icon={faCircleXmark}/>
    </button>
    <button className={cx('search-loading')}>
        <FontAwesomeIcon icon={faSpinner}/>
    </button>
    <button className={cx('search-icon')}>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
    </button>
    
    </div>
    <div className={cx('action')}>e</div>
    </div>

    </header>)
}

export default Header;