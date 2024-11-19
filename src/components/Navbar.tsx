import reactLogo from "../assets/react.svg";
export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-start bg-gray-700 px-4 py-5 font-roboto">
        <div className="logo">
          <img src={reactLogo} alt="logo..." />
        </div>
        <div className="mx-3">
          <span className="text-xl font-semibold text-white">My</span>
          <span className="text-xl font-semibold text-gray-100">Shopping</span>
          <span className="text-xl font-semibold text-sky-400 ">List</span>
        </div>
      </div>
    </div>
  );
};
