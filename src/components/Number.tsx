import { animated, useSpring } from "@react-spring/web";
import { interpolate } from "flubber";
import { Colors, Paths } from "../Paths";

interface Props {
  index: number;
  prevIndex: number;
}

export const Number = ({ index, prevIndex }: Props) => {
  const color = Colors[0];
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
        width="100"
        height="100"
        viewBox="0 0 200 205"
      >
        <animated.path
          d={props.t.to(interpolator)}
          fill={color}
          fillOpacity={0.04}
          filterUnits="userSpaceOnUse"
          strokeOpacity={0.75}
          stroke={color}
          strokeWidth={2}
          strokeLinecap={"round"}
          filter="drop-shadow( 4px 4px 6px  rgba(0, 0, 0, 1)"
        />
      </svg>
    </div>
  );
};
