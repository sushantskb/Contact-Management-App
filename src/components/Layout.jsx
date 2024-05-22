/* eslint-disable react/prop-types */

import Sidebar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-4 md:p-10 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
