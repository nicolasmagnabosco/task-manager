"use client";

import { useState } from "react";
import cloneDeep from "lodash.clonedeep";
import { ColumnType, TaskType } from "@/types/taskManager";
import {
  DEFAULT_COLUMN,
  DEFAULT_TASK,
  TASK_STATE_DONE,
} from "@/constants/constants";

export default function useTaskManager() {
  const [columns, setColumns] = useState<Array<ColumnType>>([]);

  const onAddColumn = () => {
    setColumns((prev) => {
      return [...prev, { ...DEFAULT_COLUMN, id: crypto.randomUUID() }];
    });
  };

  const onRemoveColumn = (columnId: string) => {
    setColumns((prev) => {
      return prev.filter((c) => {
        return c.id !== columnId;
      });
    });
  };

  const onAddTask = (columnId: string) => {
    setColumns((prev) => {
      let columns = cloneDeep(prev);
      return columns.map((c) => {
        if (c.id === columnId)
          c.tasks = [...c.tasks, { ...DEFAULT_TASK, id: crypto.randomUUID() }];
        return c;
      });
    });
  };

  const onRemoveTask = (columnId: string, taskId: string) => {
    setColumns((prev) => {
      const columns = cloneDeep(prev);
      return columns.map((c) => {
        if (c.id === columnId)
          c.tasks = c.tasks.filter((t) => {
            return t.id !== taskId;
          });
        return c;
      });
    });
  };

  const onTaskDone = (columnId: string, taskId: string) => {
    setColumns((prev) => {
      const columns = cloneDeep(prev);
      return columns.map((c) => {
        if (c.id === columnId)
          c.tasks = c.tasks.map((t) => {
            if (t.id === taskId) t.state = TASK_STATE_DONE;
            return t;
          });
        return c;
      });
    });
  };

  const onEditColumnHeading = (columnId: string, heading: string) => {
    setColumns((prev) => {
      const columns = cloneDeep(prev);
      return columns.map((c) => {
        if (c.id === columnId) c.heading = heading;
        return c;
      });
    });
  };
  const onEditColumnColor = (columnId: string, color: string) => {
    setColumns((prev) => {
      const columns = cloneDeep(prev);
      return columns.map((c) => {
        if (c.id === columnId) c.color = color;
        return c;
      });
    });
  };
  const onEditTask = (columnId: string, taskId: string, task: TaskType) => {
    setColumns((prev) => {
      const columns = cloneDeep(prev);
      return columns.map((c) => {
        if (c.id === columnId)
          c.tasks = c.tasks.map((t) => {
            if (t.id === taskId) t = task;
            return t;
          });
        return c;
      });
    });
  };

  return {
    onAddColumn,
    onRemoveColumn,
    onAddTask,
    onRemoveTask,
    onTaskDone,
    onEditColumnColor,
    onEditColumnHeading,
    onEditTask,
    columns,
  };
}
