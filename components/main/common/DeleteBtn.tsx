import TrashCanIcon from "@/components/icons/TrashCanIcon";
import { TRASH_ICON } from "@/constants/constants";
export default function DeleteBtn({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="button--delete">
      <TrashCanIcon
        className="icon"
        width={TRASH_ICON.width}
        height={TRASH_ICON.height}
        strokeWidth={TRASH_ICON.strokeWidth}
      />
    </button>
  );
}
