"use client";
import { COLUMN_COLORS } from "@/constants/constants";
import useColorPicker from "@/hooks/useColorPicker";

export default function ColorPicker({
  columnId,
  columnColor,
}: {
  columnId: string;
  columnColor: string;
}) {
  const { selectColor, changeColorPickerVisibility, isColorPickerVisible } =
    useColorPicker(columnId);
  return (
    <>
      {isColorPickerVisible ? (
        <article className="bg-[color:var(--dark-blue)] rounded p-2 absolute bottom-3 left-3">
          <ul className="flex gap-3 m-auto">
            {COLUMN_COLORS.map((color, index) => (
              <li
                onClick={() => selectColor(color)}
                key={index}
                style={{ backgroundColor: color }}
                className={`rounded-xl w-4 h-4 hover:scale-110 cursor-pointer ${
                  columnColor === color &&
                  " outline outline-[color:var(--blue)]"
                }`}
              ></li>
            ))}
          </ul>
        </article>
      ) : (
        <button
          style={{ backgroundColor: columnColor }}
          onClick={changeColorPickerVisibility}
          className={`w-4 h-4 rounded-xl`}
        ></button>
      )}
    </>
  );
}
