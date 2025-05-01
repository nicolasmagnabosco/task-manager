"use client";
import useTaskEditor from "@/hooks/useTaskEditor";
import { TaskEditorCtxType } from "@/types/taskEditor";
import { createContext, ReactNode } from "react";

export const taskEditorCtx = createContext<TaskEditorCtxType | null>(null);
export default function TaskEditorProvider({
  children,
}: {
  children: ReactNode;
}) {
  const values = useTaskEditor();
  return (
    <taskEditorCtx.Provider value={values}>{children}</taskEditorCtx.Provider>
  );
}
