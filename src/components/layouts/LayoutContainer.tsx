import NextNProgress from "nextjs-progressbar";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const LayoutContainer = ({ children }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="px-2 py-1 lg:px-20">
          {/* // wrapper 👆 */}
          {children}
        </div>
      </div>
    </div>
  );
};
// sm->640
export default LayoutContainer;
