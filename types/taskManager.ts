export interface TaskManagerType {
  onAddColumn: () => void;
  onRemoveColumn: (columnIndex: string) => void;
  onAddTask: (columnIndex: string) => void;
  onRemoveTask: (columnIndex: string, taskIndex: number) => void;
  onTaskDone: (columnIndex: string, taskindex: number) => void;
  onEditColumnColor: (columnIndex: string, value: string) => void;
  onEditColumnHeading: (columnIndex: string, value: string) => void;
  onEditTask: (columnIndex: string, taskindex: number, value: TaskType) => void;
  columns: Array<ColumnType>;
}

export interface SubtaskType {
  id: string;
  heading: string;
  state: TaskStateType;
}
export type TaskStateType = "ongoing" | "done";

export interface TaskType {
  id: string;
  heading: string;
  description: string;
  image?: string;
  subtasks: Array<SubtaskType>;
  state: TaskStateType;
}
export interface ColumnType {
  id: string;
  heading: string;
  color: string;
  tasks: Array<TaskType>;
}
