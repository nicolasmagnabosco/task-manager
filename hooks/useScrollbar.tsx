import { useRef } from "react";
export default function useScrollbar() {
  const scrollbar = useRef<HTMLUListElement>(null);
  const handleScrollLeft = () => {
    if (scrollbar.current) {
      const scrollValue = scrollbar.current?.clientWidth * 0.5;
      scrollbar.current.scrollBy({ left: scrollValue });
    }
  };
  const handleScrollRight = () => {
    if (scrollbar.current) {
      const scrollValue = scrollbar.current?.clientWidth * 0.5;
      scrollbar.current.scrollBy({ left: -scrollValue });
    }
  };

  return { handleScrollLeft, handleScrollRight, scrollbar };
}
