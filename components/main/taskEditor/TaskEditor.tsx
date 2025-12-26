"use client";
import { taskEditorCtx } from "@/components/contexts/TaskEditorProvider";
import { TaskEditorCtxType } from "@/types/taskEditor";
import { ChangeEvent, MouseEvent, useContext, useRef } from "react";
import DeleteBtn from "../common/DeleteBtn";
import CompletedIcon from "@/components/icons/CompletedIcon";
import NotCompletedIcon from "@/components/icons/NotCompletedIcon";

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
    changeImage,
    currentTask,
    isWindowVisible,
    close,
    removeTaskHandler,
    changeCompletion,
  } = useContext(taskEditorCtx) as TaskEditorCtxType;

  const containerRef = useRef(null);

  const handleOutsideClick = (ev: MouseEvent<HTMLDivElement>) => {
    if (ev.target === containerRef.current) close();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length !== 0)
      changeImage(URL.createObjectURL(e.target.files![0]));
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
          <div className="flex justify-around">
            <DeleteBtn onClick={removeTaskHandler} />
            <button
              className="completed-icon-container "
              onClick={changeCompletion}
            >
              {currentTask.isCompleted ? (
                <CompletedIcon
                  className="completed-icon"
                  width={50}
                  height={50}
                  stroke="black"
                />
              ) : (
                <NotCompletedIcon
                  className="not-completed-icon"
                  width={50}
                  height={50}
                />
              )}
            </button>
          </div>
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
            defaultValue={currentTask.description}
            onBlur={(ev) => changeDescription(ev.target.value)}
            name="description"
            type="text"
          />
          <label htmlFor="image">Imagen:</label>
          <input
            className="button"
            name="image"
            accept="image/png, image/jpg"
            type="file"
            onChange={handleChange}
          />
        </div>
        <button className="button" onClick={() => done()}>
          Done
        </button>
      </dialog>
    </div>
  );
}
