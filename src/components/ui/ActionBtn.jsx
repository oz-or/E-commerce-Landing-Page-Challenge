function ActionBtn({ children, className, onClick }) {
  return (
    <button
      className={`flex items-center justify-center w-full px-6 py-4  rounded-lg gap-x-4 bg-orangeColor  hover:opacity-60 text-lightGrayBlue ${className} font-bold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ActionBtn;
