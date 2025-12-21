import Sidebar from "@/components/sidebar";

const PanelLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default PanelLayout;
