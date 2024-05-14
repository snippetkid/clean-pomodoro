import { Colors } from "../Paths";

export const Colon = () => {
  const color = Colors[0];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "0 0.75rem",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 200 205"
      >
        <path
          d="M0,100a100,100 0 1,0 200,0a100,100 0 1,0 -200,0"
          fill={color}
          filterUnits="userSpaceOnUse"
          filter="drop-shadow( 2px 2px 3px  rgba(0, 0, 0, 0.7)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 200 205"
      >
        <path
          d="M0,100a100,100 0 1,0 200,0a100,100 0 1,0 -200,0"
          fill={color}
          filterUnits="userSpaceOnUse"
          filter="drop-shadow( 2px 2px 3px  rgba(0, 0, 0, 0.7)"
        />
      </svg>
    </div>
  );
};
