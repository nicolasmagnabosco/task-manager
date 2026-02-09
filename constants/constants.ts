import { ColorType } from "@/types/common";
import { ColumnType, TaskType } from "@/types/taskManager";
import { Darker_Grotesque } from "next/font/google";

export const DEFAULT_COLUMN: ColumnType = {
  id: "", //assigned when created
  heading: "New Column",
  colors: { color: "#4d5ef5", darkenedColor: "#06070f" },
  tasks: [],
};
export const TASK_STATE_ONGOING = "ongoing";
export const TASK_STATE_DONE = "done";

export const DEFAULT_TASK: TaskType = {
  id: "", //assigned when created
  heading: "New task",
  description: "",
  isCompleted: false,
  order: 0, //properly set when created
};

export const COLUMN_COLORS: Array<ColorType> = [
  { color: "#f54d4d", darkenedColor: "#190202" },
  { color: "#4d5ef5", darkenedColor: "#06070f" },
  { color: "#4df577", darkenedColor: "#051d08" },
  { color: "#d34df5", darkenedColor: "#0c0419" },
  { color: "#f5ea4d", darkenedColor: "#191905" },
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
