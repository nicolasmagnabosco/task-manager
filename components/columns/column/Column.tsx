"use client";
import { taskManagerCtx } from "@/components/contexts/TaskManagerProvider";
import { ColumnType, TaskManagerType } from "@/types/taskManager";
import { useContext, useState } from "react";
import Task from "./task/Task";
export default function Column({
  info: { heading, color, tasks, id },
}: {
  info: ColumnType;
}) {
  const { onRemoveColumn, onEditColumnHeading, onEditColumnColor, onAddTask } =
    useContext(taskManagerCtx) as TaskManagerType;
  const [inputValue, setInputValue] = useState(heading);
  return (
    <li className="bg-slate-600 w-24 h-96">
      <div>
        <div>
          <button
            style={{ backgroundColor: color }}
            onClick={() => onEditColumnColor(id, "#15be94")}
            className={`w-4 h-4 rounded`}
          ></button>
          <input
            name="heading"
            style={{ color: "black" }}
            type="text"
            value={inputValue}
            onChange={(ev) => setInputValue(ev.target.value)}
            onBlur={() => onEditColumnHeading(id, inputValue)}
          />
        </div>

        <button onClick={() => onRemoveColumn(id)} className="text-rose-700">
          delete
        </button>
        <button onClick={() => onAddTask(id)}>add task</button>
      </div>
      <div>
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} info={task} />
          ))}
        </ul>
      </div>
    </li>
  );
}
