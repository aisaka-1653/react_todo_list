import { useState } from "react";

export const useEditingState = () => {
  const [editingId, setEditingId] = useState<number | null>(null);

  const startEditing = (id: number) => setEditingId(id);
  const stopEditing = () => setEditingId(null);
  const isEditing = (id: number) => editingId === id;

  return { isEditing, startEditing, stopEditing };
};
