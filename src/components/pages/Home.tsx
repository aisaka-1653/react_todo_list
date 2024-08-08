import { Center, Flex } from "@yamada-ui/react";
import { FC } from "react";
import { TextInput } from "../atoms/TextInput";
import { ActionButton } from "../atoms/ActionButton";

export const Home: FC = () => {
  return (
    <Center>
      <Flex gap="md">
        <TextInput placeholder="なにをしていますか?" />
        <ActionButton color="purple" onClick={() => alert("hello")}>
          Add
        </ActionButton>
      </Flex>
    </Center>
  );
};
