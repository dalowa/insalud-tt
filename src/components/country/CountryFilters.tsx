import { PopulationFilter, RegionSelect, SearchInput, SortBySelect} from '../forms';
import { CountryCleanButton } from './CountryCleanButton';

export const CountryFilters = () => {
  console.log('Rendering CountryFilters');
  return (
      <div className='flex flex-col max-w-[var(--max-w-container)] sm:justify-between sm:flex-row w-full  items-center gap-3 mx-auto py-5 flex-wrap'>
        <SearchInput/>
        <div className='flex w-full gap-1 justify-center sm:w-[62.5%] md:max-w-[450px] sm:justify-end'>
          <PopulationFilter />
          <RegionSelect />
          <SortBySelect />
        </div>
        <CountryCleanButton />
      </div>
  );
};