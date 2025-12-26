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

export default function Task({
  task,
  columnId,
}: {
  task: TaskType;
  columnId: string;
}) {
  const { open } = useContext(taskEditorCtx) as TaskEditorCtxType;
  const { removeTask } = useContext(taskManagerCtx) as TaskManagerType;
  return (
    <article className="bg-[color:var(--dark-blue)] rounded relative">
      <button
        className="absolute top-0 right-2 edit-button"
        onClick={() => open(columnId, task.id, task)}
      >
        <EditIcon
          width={EDIT_ICON.width}
          height={EDIT_ICON.height}
          stroke={EDIT_ICON.stroke}
          strokeWidth={1.5}
        />
      </button>
      <div className="flex flex-col items-center">
        <h2>{task.heading}</h2>
        <p style={{ overflowWrap: "break-word" }} className="max-w-[80%]">
          {task.description}
        </p>
        {task.image && <Image src={task.image} alt="attached img" />}
        <ul>
          {task.subtasks &&
            task.subtasks.map((subtask) => (
              <Subtask
                key={subtask.id}
                columnId={columnId}
                taskId={task.id}
                subtask={subtask}
              />
            ))}
        </ul>
      </div>
    </article>
  );
}
