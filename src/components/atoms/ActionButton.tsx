import { FC, ReactNode } from "react";
import { Button } from "@yamada-ui/react";

type Props = {
  color: string;
  onClick: () => void;
  children: ReactNode;
};

export const ActionButton: FC<Props> = (props) => {
  const { color, onClick, children } = props;
  return (
    <Button colorScheme={color} variant="outline" onClick={onClick}>
      {children}
    </Button>
  );
};
