import { useTodos } from "@/hooks/useTodos";
import { useState } from "react";

export const useTodoList = () => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const { todos, toggleTodo, deleteTodo, editTodo } = useTodos();

  const startEditing = (id: number, currentText: string) => {
    setEditingId(id);
    setEditValue(currentText);
  };

  const saveEdit = () => {
    if (editingId && editValue.trim()) {
      editTodo(editingId, editValue.trim());
    }
    setEditingId(null);
    setEditValue("");
  };

  return {
    todos,
    toggleTodo,
    deleteTodo,
    saveEdit,
    startEditing,
    editValue,
    editingId,
    setEditingId,
    setEditValue
  };
};
