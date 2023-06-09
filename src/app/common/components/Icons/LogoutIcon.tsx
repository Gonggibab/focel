type LogoutIconProps = {
  width: number;
  height: number;
  color?: string;
};

export default function LogoutIcon({ width, height, color }: LogoutIconProps) {
  return (
    <svg
      className={`text-inherit ${color} w-[${width}px] h-[${height}px] flex-shrink-0`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
    </svg>
  );
}
