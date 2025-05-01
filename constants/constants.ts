import {
  ColumnType,
  SubtaskType,
  TaskStateType,
  TaskType,
} from "@/types/taskManager";

export const DEFAULT_COLUMN: ColumnType = {
  id: "", //assigned when created
  heading: "New Column",
  color: "#f54d4d",
  tasks: [],
};
export const TASK_STATE_ONGOING = "ongoing";
export const TASK_STATE_DONE = "done";

export const DEFAULT_TASK: TaskType = {
  id: "", //assigned when created
  heading: "New task",
  description: "",
  subtasks: [],
  state: TASK_STATE_ONGOING,
};

export const DEFAULT_SUBTASK: SubtaskType = {
  id: "", //assigned when created
  heading: "New Subtask",
  state: TASK_STATE_ONGOING,
};
export const COLUMN_COLORS = [
  "#f54d4d",
  "#4d5ef5",
  "#4df577",
  "#d34df5",
  "#f5ea4d",
];

export const ADD_ICON = {
  width: 25,
  height: 25,
  strokeWidth: 1.5,
  stroke: "white",
};
export const TRASH_ICON = {
  width: 25,
  height: 25,
  strokeWidth: 1.5,
  stroke: "white",
};
export const EDIT_ICON = {
  width: 30,
  height: 30,
  strokeWidth: 1.5,
  stroke: "white",
};
