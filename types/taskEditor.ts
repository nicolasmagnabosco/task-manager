import { SubtaskType, TaskType } from "./taskManager";

export interface TaskEditorCtxType {
  close: () => void;
  done: () => void;
  open: (columnId: string, task: TaskType) => void;
  changeHeading: (heading: string) => void;
  changeDescription: (description: string) => void;
  changeImage: (image: string) => void;
  updateCompletion: (state: boolean) => void;
  changeSubtasks: (subtasks: Array<SubtaskType>) => void;
  isWindowVisible: boolean;
  currentTask: TaskType;
  addSubtask: () => void;
}
