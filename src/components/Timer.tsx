import { Colon } from "./Colon";
import { Number as Num } from "./Number";

interface Props {
  minutes: number;
  seconds: number;
}
export const Timer = ({ minutes, seconds }: Props) => {
  const [s10, s1] = String(seconds).padStart(2, "0").split("").map(Number);
  const [m10, m1] = String(minutes).padStart(2, "0").split("").map(Number);

  const getPrevIndexForSeconds = () => {
    const pI = s1 === 0 ? (s10 - 1 < 0 ? 0 : s10 - 1) || 0 : s10;
    return pI;
  };

  const getPrevIndexForMinutes = () => {
    const prevIndex =
      s10 === 0 && s1 == 0 ? (m1 - 1 < 0 ? 0 : m1 - 1) || 0 : m1;
    return prevIndex;
  };

  const getPrevIndexForMinTens = () => {
    const prevIndex =
      m1 === 0 && s10 === 0 && s1 == 0 ? (m10 - 1 < 0 ? 0 : m10 - 1) || 0 : m10;
    console.log(prevIndex);
    return prevIndex;
  };

  //   console.log(s1);
  return (
    <div style={{ display: "flex" }}>
      <Num index={m10} prevIndex={getPrevIndexForMinTens()} />
      <Num index={m1} prevIndex={getPrevIndexForMinutes()} />
      <Colon />
      <Num index={s10} prevIndex={getPrevIndexForSeconds()} />
      <Num index={s1} prevIndex={s1 === 0 ? 9 : s1 - 1} />
    </div>
  );
};
