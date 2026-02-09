"use client";

import { taskManagerCtx } from "@/components/contexts/TaskManagerProvider";
import { TaskManagerType } from "@/types/taskManager";
import { useContext } from "react";
import Column from "./column/Column";
import useScrollbar from "@/hooks/useScrollbar";
export default function Columns() {
  const { columns } = useContext(taskManagerCtx) as TaskManagerType;
  const { scrollbar, handleScrollLeft, handleScrollRight } = useScrollbar();
  return (
    <section
      className="bg-[color:var(--dark-blue)] p-5 flex-1 overflow-auto"
      aria-label="tasks columns"
    >
      <div className="flex justify-center items-center gap-5">
        <button
          className="flex items-center justify-center rotate-180"
          onClick={handleScrollRight}
        >
          &#x27A4;
        </button>

        <button
          className="flex items-center justify-center"
          onClick={handleScrollLeft}
        >
          &#x27A4;
        </button>
      </div>

      <ul
        ref={scrollbar}
        className="flex gap-2 overflow-x-auto custom-scrollbar scroll-smooth py-2"
      >
        {columns.map((col) => (
          <Column key={col.id} column={col} />
        ))}
      </ul>
    </section>
  );
}
