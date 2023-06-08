type LoginBtnProps = {
  width: number;
  height: number;
  onClick?: () => void;
};

export default function LoginBtn({ width, height, onClick }: LoginBtnProps) {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center text-inherit"
      onClick={onClick}
    >
      <span className="sr-only">Login</span>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z" />
      </svg>
    </button>
  );
}
