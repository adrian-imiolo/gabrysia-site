import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();
  const navbarHeight = 70; // Height of the navbar

  const hashElement = useMemo(() => {
    const hash = location.hash;
    const removeHashCharacter = (str: string) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));
      return element;
    } else {
      return null;
    }
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      const elementRect = hashElement.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const scrollToPosition = absoluteElementTop - navbarHeight;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  }, [hashElement]);

  return null;
};

export default ScrollToHashElement;
