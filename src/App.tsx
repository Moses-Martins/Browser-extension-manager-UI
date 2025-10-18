import { useState } from 'react';
import CardList from './cardlist/CardList';
import FilterButtons, { type Filter } from './components/filterbutton/FilterButtons';
import Header from './components/header/Header';


function App() {

  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  return (
    <>
      <Header />
      <div className="w-[93%] mx-[auto] mt-[5vh] mb-[4vh] flex items-center justify-between max-sm:flex-col">
        <h1 className="text-[clamp(2rem,1.5vw,6.5rem)] font-bold text-gray-800 max-sm:mb-[3vh] dark:text-white">Extensions List</h1>
        <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>
      <CardList activeFilter={activeFilter} />
    
    </>
  )
}

export default App