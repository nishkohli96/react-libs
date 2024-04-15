import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import 'react-toastify/dist/ReactToastify.css';

const ReactToastifyEg = () => {
  const toastId = useRef(null);

  /* ToastContainer is reqd to render toast content */
  const notify = () =>
    toast('This is a simple toast customized!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      type: 'info'
    });

  const dismiss = () => toast.dismiss(toastId.current);
  const dismissAll = () => toast.dismiss();

  return (
    <div>
      <Button sx={{ backgroundColor: '#ff5423' }} onClick={notify}>
        React-Toastify Btn
      </Button>
      <Button onClick={dismiss}>Dismiss Toast</Button>
      <Button onClick={dismissAll}>Dismiss All Toasts</Button>
      <ToastContainer />
    </div>
  );
};

export default ReactToastifyEg;
