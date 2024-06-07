"use client";
import { taskManagerCtx } from "@/components/contexts/TaskManagerProvider";
import { TaskManagerType, TaskType } from "@/types/taskManager";
import { useContext } from "react";
export default function Task({ info }: { info: TaskType }) {
  return <div>{info.id}</div>;
}
