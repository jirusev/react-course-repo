import { useState } from "react";
import Backdrop from "./Backdrop";

function Modal(props) {
    const [modalIsOpen, setModelIsOpen] = useState(false);

    function cancelHandler() {
        props.onCancel();
    }

    function confirmHandler() {
        props.onConfirm();
    }

    return <div className='modal'>
        <p>Are you sure ?</p>
        <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
        <button className='btn' onClick={confirmHandler}>Confirm</button>        
    </div>
}


export default Modal;