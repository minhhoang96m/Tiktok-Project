const iconMessage = {
        icon: require("~/components/Icon/icon-mes.svg").default,      
}
const iconInbox = {
    icon: require("~/components/Icon/icon-inbox.svg").default,      
}

const IconMessage = (props) => {
    return (
        <img {...props} src={iconInbox.icon} alt="inbox" />
    );
}
 const IconInbox = (props) => {
    return (
        <img {...props} src={iconMessage.icon} alt="mes" />
    );
}

export { IconMessage, IconInbox }  
