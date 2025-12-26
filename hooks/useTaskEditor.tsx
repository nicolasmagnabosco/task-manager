import { taskManagerCtx } from "@/components/contexts/TaskManagerProvider";
import { DEFAULT_TASK } from "@/constants/constants";
import { TaskEditorCtxType } from "@/types/taskEditor";
import { TaskManagerType, TaskType } from "@/types/taskManager";
import { useContext, useState } from "react";

export default function useTaskEditor() {
  const [currentColId, setCurrentColId] = useState<string>("");
  const [currentTaskId, setCurrentTaskId] = useState<string>("");
  const [currentTask, setCurrentTask] = useState<TaskType>(DEFAULT_TASK);
  const { updateTask, removeTask } = useContext(
    taskManagerCtx
  ) as TaskManagerType;
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
    console.log(currentTask);
    updateTask(currentColId, currentTaskId, currentTask);
    close();
  };

  const changeHeading = (text: string) => {
    setCurrentTask((prev) => {
      return { ...prev, heading: text };
    });
  };
  const changeImage = (url: string) => {
    setCurrentTask((prev) => {
      return { ...prev, image: url };
    });
  };
  const changeDescription = (text: string) => {
    setCurrentTask((prev) => {
      return { ...prev, description: text };
    });
  };
  const removeTaskHandler = () => {
    removeTask(currentColId, currentTaskId);
    close();
  };
  const changeCompletion = () => {
    setCurrentTask((prev) => {
      return { ...prev, isCompleted: !currentTask.isCompleted };
    });
  };

  return {
    open,
    close,
    done,
    changeHeading,
    changeImage,
    removeTaskHandler,
    changeDescription,
    changeCompletion,
    isWindowVisible,
    currentTask,
  };
}
