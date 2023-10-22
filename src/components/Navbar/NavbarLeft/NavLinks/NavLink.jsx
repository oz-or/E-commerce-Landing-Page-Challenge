function NavLink({ text, className }) {
  return (
    <div className={`cursor-pointer ${className}`}>
      <a href="#">{text}</a>
    </div>
  );
}

export default NavLink;
