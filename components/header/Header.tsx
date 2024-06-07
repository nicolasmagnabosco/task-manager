"use client";
import { useContext } from "react";
import { taskManagerCtx } from "../contexts/TaskManagerProvider";
import { TaskManagerType } from "@/types/taskManager";
export default function Header() {
  const { onAddColumn } = useContext(taskManagerCtx) as TaskManagerType;
  return (
    <header>
      <h1 id="heading">Task Manager</h1>
      <button onClick={onAddColumn}>+ Add a new column</button>
    </header>
  );
}
