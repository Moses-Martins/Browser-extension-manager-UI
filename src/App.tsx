import { useState } from 'react';
import CardList from './cardlist/CardList';
import FilterButtons, { type Filter } from './components/filterbutton/FilterButtons';
import Header from './components/header/Header';


function App() {

  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  return (
    <>
      <Header />
      <div className="w-[93%] max-w-7xl mx-auto mt-6 mb-6 flex items-center justify-between max-sm:flex-col">
        <h1 className="text-2xl font-bold text-gray-800 max-sm:mb-[3vh] dark:text-white">Extensions List</h1>
        <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>
      <CardList activeFilter={activeFilter} />
    
    </>
  )
}

export default App