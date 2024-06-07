"use client";
import { taskManagerCtx } from "@/components/contexts/TaskManagerProvider";
import { TaskManagerType } from "@/types/taskManager";
import { useContext } from "react";
import Column from "./column/Column";
export default function Columns() {
  const { columns, onRemoveColumn } = useContext(
    taskManagerCtx
  ) as TaskManagerType;
  return (
    <section>
      <ul>
        {columns.map((col) => (
          <Column key={col.id} info={col} />
        ))}
      </ul>
    </section>
  );
}
