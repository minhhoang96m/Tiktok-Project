import PropTypes from 'prop-types';
import './GlobalStyles.scss'

const GlobalStyles = ({children}) => {
    return children
}
GlobalStyles.prototypes = {
    children : PropTypes.node.isRequired 
}
export default GlobalStyles