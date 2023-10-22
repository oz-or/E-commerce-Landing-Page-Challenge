function NextSVG({ fill }) {
  return (
    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m2 1 8 8-8 8"
        stroke="#1D2026"
        strokeWidth="3"
        fill={fill || "none"}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default NextSVG;
