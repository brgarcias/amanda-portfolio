import { useEffect, useRef } from "react";
let useClickOutside = (handler) => {
  let nodes = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
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
