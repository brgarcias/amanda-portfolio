import { useEffect, useRef } from "react";
const useClickOutside = (handler: { (): void; (): void }) => {
  const nodes = useRef(null);

  useEffect(() => {
    const maybeHandler = (event: { target: any }) => {
      if (!nodes.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return nodes;
};

export default useClickOutside;
