import { useEffect, useState } from "react";
import { Timer } from "./Timer";

export const Pomodoro = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const intervalId = setInterval(() => {
        setElapsedSeconds((value) => value + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [start]);

  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  return (
    <div onClick={() => setStart(!start)}>
      <Timer minutes={minutes} seconds={seconds} />
    </div>
  );
};
