import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full">
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="w-full">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="mx-6 my-4">
        {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;