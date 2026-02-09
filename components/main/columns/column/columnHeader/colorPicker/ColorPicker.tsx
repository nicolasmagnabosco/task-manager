"use client";
import { COLUMN_COLORS } from "@/constants/constants";
import useColorPicker from "@/hooks/useColorPicker";
import { ColorType } from "@/types/common";

export default function ColorPicker({
  columnId,
  columnColors,
}: {
  columnId: string;
  columnColors: ColorType;
}) {
  const { selectColor, changeColorPickerVisibility, isColorPickerVisible } =
    useColorPicker(columnId);
  return (
    <>
      {isColorPickerVisible && (
        <article className="border-2 border-[var(--light-gray)] bg-[color:var(--light-blue)] rounded p-2 absolute bottom-3 left-3">
          <ul className="flex gap-3 m-auto">
            {COLUMN_COLORS.map((colors, index) => (
              <li
                onClick={() => selectColor(colors)}
                key={index}
                style={{ backgroundColor: colors.color }}
                className={`rounded-xl w-4 h-4 hover:scale-110 cursor-pointer ${
                  columnColors.color === colors.color &&
                  " outline outline-[color:var(--blue)]"
                }`}
              ></li>
            ))}
          </ul>
        </article>
      )}
      <button
        style={{ backgroundColor: columnColors.color }}
        onClick={changeColorPickerVisibility}
        className={`w-4 h-4 rounded-xl`}
      ></button>
    </>
  );
}
