import EmptyIcon from "@/components/icons/EmptyIcon";

export default function EmptyMessage() {
  return (
    <article className="flex flex-col items-center">
      <EmptyIcon style={{ fill: "var(--light-gray)" }} width={90} height={90} />
      <p>This column has no tasks... for now</p>
    </article>
  );
}
