import { useEffect, useRef, useState } from "react";
import { Timer } from "./Timer";

export const Pomodoro = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const [start, setStart] = useState(false);

  const prev = useRef(-1);

  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  useEffect(() => {
    if (start) {
      const intervalId = setInterval(() => {
        prev.current = prev.current === seconds ? -1 : seconds;
        setElapsedSeconds((value) => value + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      prev.current = -1;
    }
  }, [seconds, start]);

  return (
    <div style={{ cursor: "pointer" }} onClick={() => setStart(!start)}>
      <Timer
        running={start}
        previous={prev.current}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
};
