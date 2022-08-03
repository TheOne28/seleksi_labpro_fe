import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

type ToastParam = {
    title : string,
    msg : string,
    handleClose : (e : React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | undefined) => void,
}

export default function ToastGen({
    title,
    msg,
    handleClose,
} : ToastParam){
        return (
            <div>
                <ToastContainer className='p-3' position='top-center'>
                    <Toast onClose={handleClose}>
                        <Toast.Header closeButton={true} >
                            <strong className='me-auto'>{title}</strong>
                        </Toast.Header>
                        <Toast.Body>{msg}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        )
}