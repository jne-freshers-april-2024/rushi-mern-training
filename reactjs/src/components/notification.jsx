// react portals
import ReactDom from 'react-dom';
import '../components/notification.css'

const Notification = ({message,duration,onClose})=>{
    return ReactDom.createPortal(
        <div className="notification">
            {message}
        </div>,
        document.getElementById('portal-root'))
}


export default Notification;