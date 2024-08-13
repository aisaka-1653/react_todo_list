import { FC } from "react";
import { Flex, Text } from "@yamada-ui/react";

type Props = {
  totalTodos: number;
  doneTodos: number;
  pendingTodos: number;
};

export const TodoStats: FC<Props> = ({
  totalTodos,
  doneTodos,
  pendingTodos,
}) => (
  <Flex w="full" gap={8} justify="end">
    <Text>{`全てのタスク: ${totalTodos}`}</Text>
    <Text>{`完了のタスク: ${doneTodos}`}</Text>
    <Text>{`未完了のタスク: ${pendingTodos}`}</Text>
  </Flex>
);
