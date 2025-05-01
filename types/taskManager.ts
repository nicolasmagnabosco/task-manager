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
}

export interface SubtaskType {
  id: string;
  heading: string;
  isCompleted: boolean;
}

export interface TaskType {
  id: string;
  heading: string;
  description: string;
  image?: string;
  subtasks: Array<SubtaskType>;
  isCompleted: boolean;
}

export interface ColumnType {
  id: string;
  heading: string;
  color: string;
  tasks: Array<TaskType>;
}
