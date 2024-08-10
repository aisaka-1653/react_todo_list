import { Box, Flex, List } from "@yamada-ui/react";
import { FC, useState } from "react";
import { TextInput } from "../atoms/TextInput";
import { ActionButton } from "../atoms/ActionButton";
import { useTodos } from "../../Hooks/useTodos";
import { TodoItem } from "../molecules/TodoItem";
import { useEditingState } from "../../Hooks/useEditingState";

export const Home: FC = () => {
  const [text, setText] = useState("");
  const { todos, addTodo, updateTodo, deleteTodo, toggleTodo } = useTodos();
  const { isEditing, startEditing, stopEditing } = useEditingState();

  const handleAddTodo = () => {
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <Box maxWidth="600px" mx="auto">
      <Flex align="center" direction="column" mt={10} gap={10}>
        <Flex gap="md">
          <TextInput
            value={text}
            placeholder="なにをしますか?"
            onChange={(e) => setText(e.target.value)}
          />
          <ActionButton color="purple" onClick={handleAddTodo}>
            Add
          </ActionButton>
        </Flex>
        <List w="full">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isEditing={isEditing(todo.id)}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
              onToggle={toggleTodo}
              onEditStart={() => startEditing(todo.id)}
              onEditEnd={stopEditing}
            />
          ))}
        </List>
      </Flex>
    </Box>
  );
};
