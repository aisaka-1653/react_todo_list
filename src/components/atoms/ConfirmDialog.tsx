import { Dialog } from "@yamada-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: ReactNode;
};

export const ConfirmDialog: FC<Props> = (props) => {
  const { isOpen, onClose, onConfirm, children } = props;
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      cancel="Cancel"
      onCancel={onClose}
      success="OK"
      onSuccess={onConfirm}
    >
      {children}
    </Dialog>
  );
};
