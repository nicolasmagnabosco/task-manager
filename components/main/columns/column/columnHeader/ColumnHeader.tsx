"use client";
import { taskManagerCtx } from "@/components/contexts/TaskManagerProvider";
import { ColumnType, TaskManagerType } from "@/types/taskManager";
import { useContext, useState } from "react";
import TrashCanIcon from "@/components/icons/TrashCanIcon";
import ColorPicker from "./colorPicker/ColorPicker";
import AddIcon from "@/components/icons/AddIcon";
import { ADD_ICON, TRASH_ICON } from "@/constants/constants";
import DeleteBtn from "@/components/main/common/DeleteBtn";

export default function ColumnHeader({ column }: { column: ColumnType }) {
  const { removeColumn, editColumnHeading, addTask } = useContext(
    taskManagerCtx
  ) as TaskManagerType;

  const [inputValue, setInputValue] = useState(column.heading);

  return (
    <header className="flex justify-between relative flex-nowrap">
      <div className="flex items-center gap-1">
        <ColorPicker columnId={column.id} columnColor={column.color} />
        <input
          className="bg-[color:var(--gray)] rounded w-40 h-6 active:outline-2 focus:bg-[color:var(--dark-blue)]"
          name="heading"
          type="text"
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
          onBlur={() => editColumnHeading(column.id, inputValue)}
        />
      </div>
      <div className="flex gap-2 flex-nowrap items-center">
        <DeleteBtn onClick={() => removeColumn(column.id)} />
        <button
          className="button--neutral text-xl w-max"
          onClick={() => addTask(column.id)}
        >
          <AddIcon
            width={ADD_ICON.width}
            height={ADD_ICON.height}
            stroke={ADD_ICON.stroke}
          />
        </button>
      </div>
    </header>
  );
}
