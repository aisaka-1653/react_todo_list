import { ChangeEvent, FC } from "react";
import { Input } from "@yamada-ui/react";

type Props = {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput: FC<Props> = (props) => {
  const { value, placeholder, onChange } = props;
  return (
    <Input
      variant="flushed"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
