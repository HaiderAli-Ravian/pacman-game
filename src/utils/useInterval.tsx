"use client";
import { useEffect, useRef, useState } from "react";

type Callback = () => void;

export default function useInterval(callback: Callback, delay: number) {
  const savedCallback = useRef<Callback>(callback);

  const [actualDelay, setActualDelay] = useState<number>(delay);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }

    if (delay !== null) {
      setActualDelay(delay);
      let id = setInterval(tick, actualDelay);
      return () => clearInterval(id);
    }
  }, [delay, actualDelay]);

  return [setActualDelay];
}
