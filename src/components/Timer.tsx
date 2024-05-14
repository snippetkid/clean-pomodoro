import { Colon } from "./Colon";
import { Number as Num } from "./Number";

interface Props {
  minutes: number;
  seconds: number;
  previous: number;
  running: boolean;
}
export const Timer = ({ minutes, seconds, previous, running }: Props) => {
  const [s10, s1] = String(seconds).padStart(2, "0").split("").map(Number);
  const [m10, m1] = String(minutes).padStart(2, "0").split("").map(Number);

  document.title = `${m10}${m1}:${s10}${s1}`;

  const getPrevIndexForSecTens = () => {
    if (previous === -1 || !running) {
      return s10;
    }
    const pI = s1 === 0 ? (s10 - 1 < 0 ? 0 : s10 - 1) || 0 : s10;
    return pI;
  };

  const getPrevIndexForSeconds = () => {
    if (previous === -1 || !running) {
      return s1;
    }
    const pindex = s1 === 0 ? 9 : s1 - 1;
    return pindex;
  };

  const getPrevIndexForMinutes = () => {
    if (previous === -1 || !running) {
      return m1;
    }
    const prevIndex =
      s10 === 0 && s1 == 0 ? (m1 - 1 < 0 ? 0 : m1 - 1) || 0 : m1;
    return prevIndex;
  };

  const getPrevIndexForMinTens = () => {
    if (previous === -1 || !running) {
      return m10;
    }
    const prevIndex =
      m1 === 0 && s10 === 0 && s1 == 0 ? (m10 - 1 < 0 ? 0 : m10 - 1) || 0 : m10;
    return prevIndex;
  };

  console.log(previous);
  return (
    <div style={{ display: "flex" }}>
      <Num
        inactive={!running}
        index={m10}
        prevIndex={getPrevIndexForMinTens()}
      />
      <Num
        inactive={!running}
        index={m1}
        prevIndex={getPrevIndexForMinutes()}
      />
      <Colon />
      <Num
        inactive={!running}
        index={s10}
        prevIndex={getPrevIndexForSecTens()}
      />
      <Num
        inactive={!running}
        index={s1}
        prevIndex={getPrevIndexForSeconds()}
      />
    </div>
  );
};
