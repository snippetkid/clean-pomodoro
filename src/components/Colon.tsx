import { animated, useSpring } from "@react-spring/web";
import { Colors } from "../Paths";

interface Props {
  inactive: boolean;
}
export const Colon = ({ inactive }: Props) => {
  const opacityProps = useSpring({
    from: {
      strokeOpacity: 0.3,
      shadow: 0,
      fillOpacity: 0.05,
    },
    strokeOpacity: inactive ? 0.3 : 0.75,
    shadow: inactive ? 0.5 : 1,
    fillOpacity: inactive ? 0.05 : 1,
  });
  const color = Colors[0];

  const dot = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 200 205"
      >
        <animated.path
          d="M0,100a100,100 0 1,0 200,0a100,100 0 1,0 -200,0"
          fill={color}
          filterUnits="userSpaceOnUse"
          fillOpacity={opacityProps.fillOpacity}
          stroke={color}
          strokeWidth={2}
          strokeOpacity={opacityProps.strokeOpacity}
          filter={opacityProps.shadow.to(
            (value) => `drop-shadow( 3px 3px 4px  rgba(0, 0, 0, ${value})`
          )}
        />
      </svg>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "0 0.75rem",
      }}
    >
      {dot()}
      {dot()}
    </div>
  );
};
