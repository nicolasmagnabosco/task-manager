import { taskManagerCtx } from "@/components/contexts/TaskManagerProvider";
import { ColorPickerType } from "@/types/colorPicker";
import { ColorType } from "@/types/common";
import { TaskManagerType } from "@/types/taskManager";
import { useState, useContext } from "react";

export default function useColorPicker(columnId: string): ColorPickerType {
  const [isColorPickerVisible, setIsColorPickerVisible] =
    useState<boolean>(false);
  const { editColumnColor } = useContext(taskManagerCtx) as TaskManagerType;

  const changeColorPickerVisibility = () => {
    setIsColorPickerVisible((prev) => !prev);
  };
  const selectColor = (colors: ColorType) => {
    editColumnColor(columnId, colors);
    changeColorPickerVisibility();
  };

  return { isColorPickerVisible, changeColorPickerVisibility, selectColor };
}
