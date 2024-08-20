import SideBar from "@/components/layouts/sidebar";

const DashboardLayouts = ({ children }) => {
  return (
    <div className="relative flex justify-center md:min-h-screen">
      <SideBar />
      <div className="py-8 px-6 lg:min-h-screen lg:max-w-5xl w-full md:ms-[256px]">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayouts;
