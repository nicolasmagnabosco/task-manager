import { taskManagerCtx } from "@/components/contexts/TaskManagerProvider";
import { DEFAULT_SUBTASK, DEFAULT_TASK } from "@/constants/constants";
import { TaskEditorCtxType } from "@/types/taskEditor";
import { SubtaskType, TaskManagerType, TaskType } from "@/types/taskManager";
import { useContext, useState } from "react";

export default function useTaskEditor() {
  const [currentColId, setCurrentColId] = useState<string>("");
  const [currentTaskId, setCurrentTaskId] = useState<string>("");
  const [currentTask, setCurrentTask] = useState<TaskType>(DEFAULT_TASK);
  const { updateTask } = useContext(taskManagerCtx) as TaskManagerType;
  const [isWindowVisible, setIsWindowVisible] = useState<boolean>(false);

  const open = (columnId: string, taskId: string, task: TaskType) => {
    setCurrentTaskId(taskId);
    setCurrentColId(columnId);
    setCurrentTask(task);
    setIsWindowVisible(true);
  };

  const close = () => {
    setCurrentTask(DEFAULT_TASK);
    setIsWindowVisible(false);
  };

  const done = () => {
    updateTask(currentColId, currentTaskId, currentTask);
    close();
  };

  const changeHeading = (text: string) => {
    setCurrentTask((prev) => {
      return { ...prev, heading: text };
    });
  };
  const changeDescription = (
    columnId: string,
    taskId: string,
    text: string
  ) => {
    setCurrentTask((prev) => {
      return { ...prev, description: text };
    });
  };

  return {
    open,
    close,
    done,
    changeHeading,
    changeDescription,
    isWindowVisible,
    currentTask,
  };
}
