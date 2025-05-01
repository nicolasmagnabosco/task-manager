"use client";

import { useState } from "react";
import cloneDeep from "lodash.clonedeep";
import { ColumnType, TaskManagerType, TaskType } from "@/types/taskManager";
import {
  DEFAULT_COLUMN,
  DEFAULT_SUBTASK,
  DEFAULT_TASK,
} from "@/constants/constants";
import { ColorType } from "@/types/common";

export default function useTaskManager(): TaskManagerType {
  //database
  const [columns, setColumns] = useState<Array<ColumnType>>([]);

  const addColumn = () => {
    const newCol = { ...DEFAULT_COLUMN, id: crypto.randomUUID() };
    setColumns((cols) => {
      return [...cols, newCol];
    });
  };

  const removeColumn = (columnId: string) => {
    setColumns((cols) => {
      return cols.filter((c) => {
        return c.id !== columnId;
      });
    });
  };

  const addTask = (columnId: string) => {
    const newTask = { ...DEFAULT_TASK, id: crypto.randomUUID() };
    setColumns((cols) => {
      return cols.map((c) => {
        if (c.id === columnId) {
          return {
            ...c,
            tasks: [...c.tasks, newTask],
          };
        } else return { ...c };
      });
    });
  };

  const removeTask = (columnId: string, taskId: string) => {
    setColumns((cols) => {
      return cols.map((c) => {
        if (c.id === columnId) {
          return {
            ...c,
            tasks: c.tasks.filter((t) => {
              return t.id !== taskId;
            }),
          };
        } else return c;
      });
    });
  };
  //debouncing
  const editColumnHeading = (columnId: string, heading: string) => {
    setColumns((cols) => {
      return cols.map((c) => {
        if (c.id === columnId) {
          return { ...c, heading: heading };
        } else return c;
      });
    });
  };

  //debouncing
  const editColumnColor = (columnId: string, color: ColorType) => {
    setColumns((cols) => {
      return cols.map((c) => {
        if (c.id === columnId) {
          return { ...c, color: color };
        } else return c;
      });
    });
  };

  //database update on "done"
  const updateTask = (columnId: string, taskId: string, task: TaskType) => {
    setColumns((cols) => {
      return cols.map((c) => {
        if (c.id === columnId) {
          return {
            ...c,
            tasks: c.tasks.map((t) => {
              if (t.id === taskId) return { ...task, id: t.id };
              else return { ...t };
            }),
          };
        } else return { ...c };
      });
    });
  };

  const updateCompletion = (columnId: string, taskId: string) => {
    setColumns((cols) => {
      return cols.map((c) => {
        if (c.id === columnId) {
          return {
            ...c,
            tasks: c.tasks.map((t) => {
              if (t.id === taskId) return { ...t, isCompleted: !t.isCompleted };
              else return t;
            }),
          };
        } else return c;
      });
    });
  };

  return {
    addColumn,
    removeColumn,
    addTask,
    removeTask,
    editColumnColor,
    editColumnHeading,
    updateTask,
    columns,
    updateCompletion,
  };
}
