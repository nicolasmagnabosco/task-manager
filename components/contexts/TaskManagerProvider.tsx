"use client";

import { ReactNode, createContext } from "react";
import useTaskManager from "@/hooks/useTaskManager";
import { TaskManagerType } from "@/types/taskManager";

export const taskManagerCtx = createContext<TaskManagerType | null>(null);
export default function TaskManagerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const values = useTaskManager();
  return (
    <taskManagerCtx.Provider value={values}>{children}</taskManagerCtx.Provider>
  );
}
