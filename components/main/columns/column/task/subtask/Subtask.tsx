import { SubtaskType } from "@/types/taskManager";
import { useState } from "react";

export default function Subtask({
  columnId,
  taskId,
  subtask,
}: {
  columnId: string;
  taskId: string;
  subtask: SubtaskType;
}) {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <article aria-label="subtask">
      <div>
        <p>{subtask.heading}</p>
        {/* <button onClick={}></button> */}
      </div>
    </article>
  );
}
