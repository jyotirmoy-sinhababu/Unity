import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useShowToast = () => {
  const successMsg = (msg) => {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_CENTER,
      className:
        'border-2 border-emerald-700 text-[21px] decoration-emerald-700',
    });
  };
  const errorMsg = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_CENTER,
      className: 'border-2 border-red-900 text-[21px] decoration-rose-900',
    });
  };
  const warningMsg = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_CENTER,
      className: 'border-2 border-pink-900 text-[21px] decoration-pink-900',
    });
  };
  return { successMsg, errorMsg, warningMsg };
};

export default useShowToast;
