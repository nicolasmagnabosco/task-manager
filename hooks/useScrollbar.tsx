import { useRef } from "react";
export default function useScrollbar() {
  const scrollbar = useRef<HTMLUListElement>(null);
  const handleScrollLeft = () => {
    if (scrollbar.current) {
      scrollbar.current.scrollBy(460, 0);
    }
  };
  const handleScrollRight = () => {
    if (scrollbar.current) {
      scrollbar.current.scrollBy(-384, 0);
    }
  };

  return { handleScrollLeft, handleScrollRight, scrollbar };
}
