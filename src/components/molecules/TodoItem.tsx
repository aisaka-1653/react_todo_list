import { Checkbox, Flex, Input, ListItem, Text, useDisclosure } from "@yamada-ui/react";
import { ActionButton } from "../atoms/ActionButton";
import { Todo } from "../../types/todo";
import { FC, useState } from "react";
import { ConfirmDialog } from "../atoms/ConfirmDialog";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSave = () => {
    onUpdate(id, text);
    onEditEnd();
  };

  const handleDeleteConfirm = () => {
    onDelete(id);
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
        <ActionButton color="pink" onClick={onOpen}>
          Delete
        </ActionButton>
        <ConfirmDialog isOpen={isOpen} onClose={onClose} onConfirm={handleDeleteConfirm} >
          このタスクを削除してもよろしいですか?
        </ConfirmDialog>
      </Flex>
    </ListItem>
  );
};
