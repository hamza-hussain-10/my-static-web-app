import { Navbar } from "./components/Navbar";
import { SideBar } from "./components/SideBar";

export default function About(){
    return(
       <>
       <Navbar/>
        <div className="flex font-roboto min-h-screen bg-gray-100">
        <div className="auto">
            <SideBar />
          </div>
          <div className="flex px-4 sm:px-9 py-9 grow flex-col">
            <h2 className="text-2xl sm:text-3xl text-gray-700 font-medium  text-center">About Page</h2>
            <p className="py-4 text-gray-700  text-center sm:text-lg">This is an assignment given from the Aadi Foundation with Microsoft Workshop Session.</p>
          </div>
        </div>
       </>
    )
}