import { PopulationFilter, RegionSelect, SearchInput, SortBySelect} from '../forms';

export const CountryFilters = () => {
  return (
      <div className='flex flex-col max-w-[var(--max-w-container)] sm:justify-between sm:flex-row w-full  items-center gap-3 mx-auto py-5 flex-wrap'>
        <SearchInput/>
        <div className='flex w-full gap-1 justify-center sm:w-[62.5%] md:max-w-[450px] sm:justify-end'>
          <PopulationFilter />
          <RegionSelect />
          <SortBySelect />
        </div>
        <div className=' w-full flex justify-center sm:justify-end'>
          <button type='button' className=' border border-red-400 shadow-lg shadow-gray-400 bg-red-400 text-white px-4 py-2 rounded-xl font-black'>Clean filters</button>
        </div>
      </div>
  );
};