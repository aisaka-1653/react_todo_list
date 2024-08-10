import { Checkbox, Flex, Input, ListItem, Text } from "@yamada-ui/react";
import { ActionButton } from "../atoms/ActionButton";
import { Todo } from "../../types/todo";
import { FC, useState } from "react";

type Props = {
  todo: Todo;
  isEditing: boolean;
  onUpdate: (id: number, title: string) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEditStart: () => void;
  onEditEnd: () => void;
};

export const TodoItem: FC<Props> = (props) => {
  const {
    todo,
    isEditing,
    onUpdate,
    onDelete,
    onToggle,
    onEditStart,
    onEditEnd,
  } = props;
  const { id, title, done } = todo;

  const [text, setText] = useState(title);

  const handleSave = () => {
    onUpdate(id, text);
    onEditEnd();
  };

  return (
    <ListItem>
      <Flex w="full" align="center" gap="md">
        <Checkbox
          colorScheme="teal"
          isChecked={done}
          onChange={() => onToggle(id)}
        />
        {isEditing ? (
          <>
            <Input value={text} onChange={(e) => setText(e.target.value)} />
            <ActionButton color="lime" onClick={handleSave}>
              Save
            </ActionButton>
          </>
        ) : (
          <>
            <Text w="full" lineClamp={1}>
              {title}
            </Text>
            <ActionButton color="lime" onClick={onEditStart}>
              Edit
            </ActionButton>
          </>
        )}
        <ActionButton color="pink" onClick={() => onDelete(id)}>
          Delete
        </ActionButton>
      </Flex>
    </ListItem>
  );
};
