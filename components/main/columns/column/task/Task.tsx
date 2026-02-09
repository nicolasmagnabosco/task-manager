"use client";
import { TaskManagerType, TaskType } from "@/types/taskManager";
import { useContext } from "react";
import Image from "next/image";
import Subtask from "./subtask/Subtask";
import { TaskEditorCtxType } from "@/types/taskEditor";
import { taskEditorCtx } from "@/components/contexts/TaskEditorProvider";
import { taskManagerCtx } from "@/components/contexts/TaskManagerProvider";
import EditIcon from "@/components/icons/EditIcon";
import { EDIT_ICON } from "@/constants/constants";
import CompletedIcon from "@/components/icons/CompletedIcon";
import DragIcon from "@/components/icons/DragIcon";

export default function Task({
  task,
  columnId,
}: {
  task: TaskType;
  columnId: string;
}) {
  const { open } = useContext(taskEditorCtx) as TaskEditorCtxType;
  return (
    <li
      className={`bg-[color:var(--dark-blue)] rounded relative m-3 p-2 animate-pop ${
        task.isCompleted && "opacity-50"
      }`}
    >
      <div className="flex justify-between">
        {task.isCompleted ? (
          <CompletedIcon className="completed-icon" />
        ) : (
          <DragIcon
            style={{
              fill: "var(--light-gray)",
              width: 20,
              height: 20,
              cursor: "grab",
            }}
          />
        )}
        <button
          className="edit-button"
          onClick={() => open(columnId, task.id, task)}
        >
          <EditIcon
            width={EDIT_ICON.width}
            height={EDIT_ICON.height}
            stroke={EDIT_ICON.stroke}
            strokeWidth={1.5}
          />
        </button>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h2
          className={`border-b border-[var(--light-gray)] w-4/5 text-center text-overflow`}
        >
          {task.heading}
        </h2>
        {task.isCompleted}
        <p className="text-overflow text-sm text-center w-">
          {task.description}
        </p>
        {task.image && (
          <Image
            className={`border-2 border-[var--ligh-blue] rounded`}
            src={task.image.url}
            width={120}
            height={120}
            alt="attached img"
          />
        )}
      </div>
    </li>
  );
}
