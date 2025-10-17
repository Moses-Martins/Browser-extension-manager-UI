import { useState } from 'react';
import CardList from './cardlist/CardList';
import FilterButtons, { type Filter } from './components/filterbutton/FilterButtons';
import Header from './components/header/Header';

function App() {

  const [activeFilter, setActiveFilter] = useState<Filter>("All");



  return (
    <>
      <Header />
      <div className="w-[90%] mx-[auto] mt-[5vh] mb-[4vh] flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Extensions List</h1>
        <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>
      <CardList activeFilter={activeFilter} />
    </>
  )
}

export default App