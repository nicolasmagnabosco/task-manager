Task;
ColumnHeader;
import { ColumnType } from "@/types/taskManager";
import Task from "./task/Task";
import EmptyMessage from "./EmptyMessage";
import ColumnHeader from "./columnHeader/ColumnHeader";
export default function Column({ column }: { column: ColumnType }) {
  return (
    <li
      style={{ borderColor: column.color }}
      className={`bg-[color:var(--gray)] rounded min-w-96 p-3 flex-row h-max border-2`}
    >
      <ColumnHeader column={column} />
      <ul className="flex flex-col gap-2 mt-4 flex-nowrap">
        {column.tasks.length ? (
          column.tasks.map((task) => (
            <Task key={task.id} task={task} columnId={column.id} />
          ))
        ) : (
          <EmptyMessage />
        )}
      </ul>
    </li>
  );
}
