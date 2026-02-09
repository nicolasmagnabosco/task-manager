import { AnimatePresence, motion } from "framer-motion";
import CompletedIcon from "../../icons/CompletedIcon";
import NotCompletedIcon from "../../icons/NotCompletedIcon";

export function CompletedTaskIcons({ isCompleted }: { isCompleted: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {isCompleted ? (
        <motion.div
          key="completed"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <CompletedIcon
            style={{ stroke: "var(--green)" }}
            width={40}
            height={40}
          />
        </motion.div>
      ) : (
        <motion.div
          key="not-completed"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <NotCompletedIcon className="not-completed-icon" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
