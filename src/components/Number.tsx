import { animated, useSpring } from "@react-spring/web";
import { interpolate } from "flubber";
import { Paths } from "../Paths";

interface Props {
  index: number;
  prevIndex: number;
}

export const Number = ({ index, prevIndex }: Props) => {
  const interpolator = interpolate(Paths[prevIndex], Paths[index], {
    maxSegmentLength: 5,
  });
  const props = useSpring({
    from: { t: 0 },
    to: { t: 1 },
    reset: true,
    immediate: index === prevIndex,
  });
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 200 205"
      >
        <animated.path
          d={props.t.to(interpolator)}
          fill="#F9FBF2"
          filterUnits="userSpaceOnUse"
          filter="drop-shadow( 0px 1px 3px  rgba(0, 0, 0, 0.7)"
        />
      </svg>
    </div>
  );
};
