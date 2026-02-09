"use client";
import { taskEditorCtx } from "@/components/contexts/TaskEditorProvider";
import { TaskEditorCtxType } from "@/types/taskEditor";
import {
  ChangeEvent,
  DragEvent,
  MouseEvent,
  useContext,
  useRef,
  useState,
} from "react";
import DeleteBtn from "../common/DeleteBtn";
import Image from "next/image";
import { CompletedTaskIcons } from "@/components/main/common/CompletedTaskIcons";
import { useEffect } from "react";
export default function TaskEditor() {
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
    if (e.target.files?.length !== 0) {
      changeImage(e.target.files![0], URL.createObjectURL(e.target.files![0]));
    }
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files[0]) {
      changeImage(
        e.dataTransfer.files[0],
        URL.createObjectURL(e.dataTransfer.files[0])
      );
    }
  };

  let checkSound = new Audio("./sounds/check.mp3");
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
          <div className="flex justify-around items-center">
            <DeleteBtn onClick={removeTaskHandler} />
            <button
              className="completed-icon-container "
              onClick={() => {
                !currentTask.isCompleted && checkSound.play();
                changeCompletion();
              }}
            >
              <div className="w-12 h-12 flex justify-center items-center">
                <CompletedTaskIcons isCompleted={currentTask.isCompleted} />
              </div>
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
          <label
            className="input-label"
            htmlFor="image"
          >{`Upload an image (select manually or drag and drop)`}</label>
          <div
            className="p-5 rounded bg-[var(--light-gray)]"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            {currentTask.image && (
              <Image
                src={currentTask.image.url}
                width={50}
                height={50}
                alt="preview"
              />
            )}
            <input
              className="button"
              name="image"
              accept="image/*"
              type="file"
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="button" onClick={() => done()}>
          Done
        </button>
      </dialog>
    </div>
  );
}
