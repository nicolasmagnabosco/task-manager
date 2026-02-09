import { TaskType } from "./taskManager";

export interface TaskEditorCtxType {
  close: () => void;
  done: () => void;
  open: (columnId: string, taskId: string, task: TaskType) => void;
  changeHeading: (heading: string) => void;
  changeDescription: (description: string) => void;
  changeImage: (file: File, url: string) => void;
  removeTaskHandler: () => void;
  changeCompletion: () => void;
  isWindowVisible: boolean;
  currentTask: TaskType;
}
