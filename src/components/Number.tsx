import { animated, useSpring } from "@react-spring/web";
import { interpolate } from "flubber";
import { Colors, Paths } from "../Paths";

interface Props {
  index: number;
  prevIndex: number;
  inactive: boolean;
}

export const Number = ({ index, prevIndex, inactive }: Props) => {
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

  const opacityProps = useSpring({
    from: {
      strokeOpacity: 0.05,
      shadow: 0,
    },
    strokeOpacity: inactive ? 0.05 : 0.75,
    shadow: inactive ? 0.5 : 1,
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
          fillOpacity={0.05}
          filterUnits="userSpaceOnUse"
          strokeOpacity={opacityProps.strokeOpacity}
          stroke={color}
          strokeWidth={2}
          strokeLinecap={"round"}
          filter={opacityProps.shadow.to(
            (value) => `drop-shadow( 4px 4px 6px  rgba(0, 0, 0, ${value})`
          )}
        />
      </svg>
    </div>
  );
};
