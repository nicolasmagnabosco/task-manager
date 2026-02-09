import { ColorType } from "./common";

export interface TaskManagerType {
  addTask: (columnId: string) => void;
  removeColumn: (columnId: string) => void;
  addColumn: () => void;
  removeTask: (columnId: string, taskId: string) => void;
  editColumnColor: (columnId: string, color: ColorType) => void;
  editColumnHeading: (columnId: string, value: string) => void;
  updateTask: (columnId: string, taskId: string, value: TaskType) => void;
  columns: Array<ColumnType>;
  updateCompletion: (columnId: string, taskId: string) => void;
  reorderTasks: (columnId: string, newOrder: Array<TaskType>) => void;
}

export interface TaskType {
  id: string;
  heading: string;
  description: string;
  image?: { file: File; url: string }; //the url field is client-specific for easy rendering (createUrlObject)
  isCompleted: boolean;
  order: number;
}

export interface ColumnType {
  id: string;
  heading: string;
  colors: ColorType;
  tasks: Array<TaskType>;
}
