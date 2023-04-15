import Dialog from "@mui/material/Dialog";

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal = (props: IProps) => {
  const { isOpen, handleClose, children } = props;

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      {children}
    </Dialog>
  );
};

export default Modal;
