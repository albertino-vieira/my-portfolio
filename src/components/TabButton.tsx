interface TabButtonProps {
  handleSelectTab: () => void;
  active: boolean;
  children: React.ReactNode;
}

const TabButton = ({ active, handleSelectTab, children }: TabButtonProps) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={handleSelectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
