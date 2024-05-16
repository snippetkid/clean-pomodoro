import { useRef, useState } from "react";
import { Timer } from "./Timer";
import useInterval from "use-interval";

export const Pomodoro = () => {
  const POMODORO_LIMIT = 25 * 60;
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const prev = useRef(-1);

  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  const isComplete = () => POMODORO_LIMIT === elapsedSeconds;

  useInterval(() => {
    if (!isComplete()) {
      if (start) {
        prev.current = prev.current === seconds ? -1 : seconds;
        setElapsedSeconds((value) => value + 1);
      } else {
        prev.current = -1;
      }
    }
  }, 1000);

  const setTimerStatus = () => {
    if (isComplete()) {
      setElapsedSeconds(0);
      setStart(!start);
    } else {
      setStart(!start);
    }
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={() => setTimerStatus()}>
      <Timer
        running={start}
        previous={prev.current}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
};
