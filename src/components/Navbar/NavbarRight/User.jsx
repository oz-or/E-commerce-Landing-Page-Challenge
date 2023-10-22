import profilePicture from "../../../../images/image-avatar.png";

function User() {
  return (
    <div className="w-6 rounded-full cursor-pointer 1000:w-14 ">
      <img
        src={profilePicture}
        alt="Profile"
        className="rounded-full hover:ring-2 hover:ring-orangeColor "
      />
    </div>
  );
}

export default User;
