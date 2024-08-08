import { FC } from "react";
import { Input } from "@yamada-ui/react";

type Props = {
  placeholder: string;
};

export const TextInput: FC<Props> = (props) => {
  const { placeholder } = props;
  return <Input variant="flushed" placeholder={placeholder} />;
};
