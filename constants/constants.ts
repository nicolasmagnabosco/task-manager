import { ColumnType, TaskStateType, TaskType } from "@/types/taskManager";

export const DEFAULT_COLUMN: ColumnType = {
  id: "", //assigned when created
  heading: "New Column",
  color: "#3f3dac",
  tasks: [],
};
export const TASK_STATE_ONGOING = "ongoing";
export const TASK_STATE_DONE = "done";

export const DEFAULT_TASK: TaskType = {
  id: "", //assigned when created
  heading: "",
  description: "",
  subtasks: [],
  state: TASK_STATE_ONGOING,
};
