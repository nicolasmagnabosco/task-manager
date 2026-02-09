"use client";
import Columns from "./columns/Columns";

import TaskEditor from "./taskEditor/TaskEditor";
import { TaskEditorCtxType } from "@/types/taskEditor";
import useTaskEditor from "@/hooks/useTaskEditor";
import { useContext } from "react";
import { taskEditorCtx } from "../contexts/TaskEditorProvider";
export default function Main() {
  const { isWindowVisible } = useContext(taskEditorCtx) as TaskEditorCtxType;
  return (
    <main className="flex flex-col flex-1 overflow-auto">
      <Columns />
      {isWindowVisible && <TaskEditor />}
    </main>
  );
}
