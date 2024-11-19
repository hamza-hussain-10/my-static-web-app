import { Navbar } from "./components/Navbar";
import { ShoppingList } from "./components/ShoppingList";
import { SideBar } from "./components/SideBar";

export const Home=()=> {

    return (
      <div className="min-h-screen font-roboto bg-gray-100">
        <Navbar />
        <div className="flex gap-4">
          <div className="w-auto ">
            <SideBar />
          </div>
          <div className="w-full">
            <ShoppingList />
          </div>
        </div>
      </div>
    );
  }