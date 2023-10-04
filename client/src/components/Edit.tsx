export function Edit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 16 16"
      style={{
        color: "#ebb002",
        cursor: "pointer",
      }}
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59L2.41 15l4.12-2.36l.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3l1.45 1.45l-2.96 1.55zm3.83-2.06L4.47 9.76l8-8l1.77 1.77l-8 8z"
      ></path>
    </svg>
  );
}
