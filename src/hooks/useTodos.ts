import { TodoContext } from "@/context/Todo";
import { useContext } from "react";

export const useTodos = () => useContext(TodoContext);