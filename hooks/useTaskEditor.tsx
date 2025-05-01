import { taskManagerCtx } from "@/components/contexts/TaskManagerProvider";
import { DEFAULT_SUBTASK, DEFAULT_TASK } from "@/constants/constants";
import { TaskEditorCtxType } from "@/types/taskEditor";
import { SubtaskType, TaskManagerType, TaskType } from "@/types/taskManager";
import { useContext, useState } from "react";

export default function useTaskEditor() {
  const [currentTask, setCurrentTask] = useState<TaskType>(DEFAULT_TASK);
  const { updateTask } = useContext(taskManagerCtx) as TaskManagerType;
  const [isWindowVisible, setIsWindowVisible] = useState<boolean>(false);

  const open = (task: TaskType) => {
    setCurrentTask(task);
    setIsWindowVisible(true);
  };

  const close = () => {
    setCurrentTask(DEFAULT_TASK);
    setIsWindowVisible(false);
  };

  const done = (columnId: string, taskId: string) => {
    updateTask(columnId, taskId, currentTask);
    close();
  };

  // const changeHeading = (columnId: string, taskId: string) => {
  //   setCurrentTask(prev => {

  //   })
  // }
  return {
    open,
    close,
    done,
    isWindowVisible,
    currentTask,
  };
}
