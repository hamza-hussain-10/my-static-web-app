import { NavLink } from "react-router-dom"

export const SideBar = () => {
  return (
    <div className="px-3 md:px-10 py-5 w-full min-h-screen ">
        <h2 className="text-base sm:text-xl text-gray-500">Menu</h2>
        <ul className="flex flex-col py-3">
            <NavLink  to={"/"} className={(isActive)=>isActive.isActive?"sm:text-lg my-0.5 bg-sky-500 px-6 text-white  py-1 cursor-pointer":"sm:text-lg my-0.5 px-6 text-gray-800  py-1 cursor-pointer"}>Products</NavLink>
            <NavLink to={"/about"} className={(isActive)=>isActive.isActive?"sm:text-lg my-0.5 bg-sky-500 px-6 text-white  py-1 cursor-pointer":"sm:text-lg my-0.5 px-6 text-gray-800  py-1 cursor-pointer"}>About</NavLink>
        </ul>
    </div>
  )
}
