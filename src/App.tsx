import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./Home";
import About from "./About";

function App() {

  return (
  //   <div className="min-h-screen font-roboto bg-gray-100">
  //     <Navbar />
  //     <div className="flex">
  //       <div className="w-48">
  //         <SideBar />
  //       </div>
  //       <div className="w-full">
  //         <ShoppingList />
  //       </div>
  //     </div>
  //   </div>
  // );
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
