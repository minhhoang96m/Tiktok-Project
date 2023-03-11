import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Dropper.module.scss'

const cx = classNames.bind(styles)
function Dropper({children, className}) {
    const classes = cx('Dropper', {
        [className]:className
    })
    return <div className={classes}>{children}</div>
    
}
Dropper.propTypes = {
    children : PropTypes.node.isRequired,
    className : PropTypes.string,
}
export default Dropper;