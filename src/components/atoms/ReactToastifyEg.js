import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import 'react-toastify/dist/ReactToastify.css';

const ReactToastifyEg = () => {
  const toastId = useRef(null);

  /**
   * ToastContainer is reqd to render toast content, and to configure
   * a common setting for all toasts. If using this throughout the app,
   * consider rendering ToastContainer in App.tsx.
   */
  const notify = () => {
    toast.success('This toast content has default setting');
    toast('This is a customized toast!', {
      position: 'top-right',
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      type: 'info',
      closeButton: true
    });
  };

  const dismiss = () => toast.dismiss(toastId.current);
  const dismissAll = () => toast.dismiss();

  return (
    <div>
      <ToastContainer
        autoClose={3000}
        limit={2}
        closeButton={false}
        style={{ fontSize: '20px' }}
      />
      <Button sx={{ backgroundColor: '#ff5423' }} onClick={notify}>
        React-Toastify Btn
      </Button>
      <Button onClick={dismiss}>Dismiss Toast</Button>
      <Button onClick={dismissAll}>Dismiss All Toasts</Button>
    </div>
  );
};

export default ReactToastifyEg;
