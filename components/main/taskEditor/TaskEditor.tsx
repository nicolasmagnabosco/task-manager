"use client";
import { taskEditorCtx } from "@/components/contexts/TaskEditorProvider";
import { TaskEditorCtxType } from "@/types/taskEditor";
import { MouseEvent, useContext, useRef } from "react";

export default function TaskEditor({
  columnId,
  taskId,
}: {
  columnId: string;
  taskId: string;
}) {
  const {
    changeHeading,
    changeDescription,
    done,
    currentTask,
    isWindowVisible,
    close,
    addSubtask,
  } = useContext(taskEditorCtx) as TaskEditorCtxType;

  const containerRef = useRef(null);

  const handleOutsideClick = (ev: MouseEvent<HTMLDivElement>) => {
    if (ev.target === containerRef.current) close();
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleOutsideClick}
      className="w-full h-full bg-black bg-opacity-40 absolute left-0 top-0"
    >
      <dialog
        open={isWindowVisible}
        className="dialog bg-[color:var(--dark-blue)] border-4 border-[color:var(--light-gray)] rounded absolute left-0 top-1/4 flex flex-col items-center p-4"
      >
        <div className="flex flex-col gap-2 pb-4">
          <label className="input-label" htmlFor="heading">
            Name:
          </label>
          <input
            className="text-input"
            defaultValue={currentTask.heading}
            onBlur={(ev) => changeHeading(ev.target.value)}
            name="heading"
            type="text"
          />
          <label className="input-label" htmlFor="description">
            Description:
          </label>
          <input
            className="text-input"
            onBlur={(ev) => changeDescription(ev.target.value)}
            defaultValue={currentTask.description}
            name="description"
            type="text"
          />
          <button onClick={() => addSubtask()} className="button">
            Add Subtask
          </button>
        </div>
        <button className="button" onClick={() => done()}>
          Done
        </button>
      </dialog>
    </div>
  );
}
