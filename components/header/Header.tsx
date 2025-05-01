"use client";
import { useContext } from "react";
import Image from "next/image";
import logo from "@/app/favicon.ico";
import { taskManagerCtx } from "../contexts/TaskManagerProvider";
import { TaskManagerType } from "@/types/taskManager";
export default function Header() {
  const { addColumn } = useContext(taskManagerCtx) as TaskManagerType;
  return (
    <header className="bg-[color:var(--gray)] flex justify-between items-center px-5 py-2">
      <div className="flex items-center">
        <Image src={logo} alt="icon" width={40} height={40} />
        <h1 id="heading" className="p-1.5 text-lg">
          Task Manager
        </h1>
      </div>
      <button className="button" onClick={addColumn}>
        + Add a new column
      </button>
    </header>
  );
}
