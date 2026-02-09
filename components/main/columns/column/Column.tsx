"use client";
import { ColumnType, TaskManagerType, TaskType } from "@/types/taskManager";
import Task from "./task/Task";
import EmptyMessage from "./EmptyMessage";
import ColumnHeader from "./columnHeader/ColumnHeader";
import { ReactSortable } from "react-sortablejs"; //drag and drop sorting library
import { useContext } from "react";
import { taskManagerCtx } from "@/components/contexts/TaskManagerProvider";

export default function Column({ column }: { column: ColumnType }) {
  const { reorderTasks } = useContext(taskManagerCtx) as TaskManagerType;

  return (
    <li
      style={{
        borderColor: column.colors.color,
        backgroundColor: column.colors.darkenedColor,
      }}
      className={`rounded xl:min-w-96 p-3 flex-row h-max border-2 animate-pop`}
    >
      <ColumnHeader column={column} />

      {column.tasks.length ? (
        <ReactSortable
          className="flex flex-col gap-2 mt-4 flex-nowrap"
          tag="ul"
          list={column.tasks}
          forceFallback
          fallbackOnBody
          fallbackTolerance={3}
          setList={(newOrder: Array<TaskType>) =>
            reorderTasks(column.id, newOrder)
          }
        >
          {column.tasks.map((task) => (
            <Task key={task.id} task={task} columnId={column.id} />
          ))}
        </ReactSortable>
      ) : (
        <EmptyMessage />
      )}
    </li>
  );
}
