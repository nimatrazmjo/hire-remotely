import Dialog from './basic/basic-dialog.component';
import Button from './button/button.component';

export default function Confirm(props) {
  const { open, onClose, title, children, onConfirm } = props;
  if (!open) {
    return <></>;
  }
  
  return (
    <Dialog open={open} onClose={onClose}>
      <h2 className="text-xl">{title}</h2>
      <div className="py-5">{children}</div>
      <div className="flex justify-end">
        <div className="p-1">
          <Button
            onClick={() => onClose()}
            className="bg-secondary hover:bg-secondary-light"
          >
            No, cancel it
          </Button>
        </div>
        <div className="p-1">
          <Button
            onClick={() => {
              onClose();
              onConfirm();
            }}
          >
            Yes, Submit it
          </Button>
        </div>
      </div>
    </Dialog>
  );
}