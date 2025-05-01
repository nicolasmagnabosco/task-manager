import { ColorType } from "./common";

export interface ColorPickerType {
  isColorPickerVisible: boolean;
  changeColorPickerVisibility: () => void;
  selectColor: (color: ColorType) => void;
}
