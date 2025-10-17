export type Filter = "All" | "Active" | "Inactive";

type FilterButtonsProps = {
  activeFilter: Filter;
  setActiveFilter: (filter: Filter) => void;
};

function FilterButtons({ activeFilter, setActiveFilter }: FilterButtonsProps) {
  const filters: Filter[] = ["All", "Active", "Inactive"];

  const getButtonClasses = (filter: Filter): string => {
    const baseClasses =
      "px-5 py-2 rounded-full font-bold transition-colors duration-200 ease-in-out cursor-pointer shadow-sm";
    return activeFilter === filter
      ? `${baseClasses} bg-red-600 text-white border border-red-600`
      : `${baseClasses} bg-white text-gray-700 border border-gray-400 hover:bg-gray-100`;
  };

  return (
    <div className="flex space-x-3 rounded-lg">
      {filters.map((filter) => (
        <button
          key={filter}
          className={getButtonClasses(filter)}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
