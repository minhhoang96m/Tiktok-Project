import classNames from "classnames/bind";
import styles from './Dropper.module.scss'

const cx = classNames.bind(styles)
function Dropper({children, className}) {
    const classes = cx('Dropper', {
        [className]:className
    })
    return <div className={classes}>{children}</div>
    
}

export default Dropper;