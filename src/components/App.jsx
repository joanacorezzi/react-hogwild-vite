// Main App component – controls all hogs, filters, and form
import React, { useState } from "react";
import hogsData from "../porkers_data";
import HogList from "./HogList";
import FilterBar from "./FilterBar";
import HogForm from "./HogForm";

function App() {
  //State for all hogs (adds IDs and hidden property)
  const [hogs, setHogs] = useState(
    hogsData.map((hog, index) => ({
      ...hog,
      id: index,
      hidden: false,
    }))
  );

  //State for filters
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("none");

  //Hide a hog when "Hide Me" is clicked
  function handleHideHog(id) {
    setHogs((prevHogs) =>
      prevHogs.map((hog) =>
        hog.id === id ? { ...hog, hidden: true } : hog
      )
    );
  }

  //Toggle greased filter
  function handleToggleGreased() {
    setShowGreasedOnly((prev) => !prev);
  }

  //Update sort option
  function handleSortChange(newSort) {
    setSortBy(newSort);
  }

  //Add new hog 
  function handleAddHog(newHog) {
    setHogs((prevHogs) => [
      ...prevHogs,
      { ...newHog, id: prevHogs.length, hidden: false },
    ]);
  }

  //Filter out hidden hogs
  const visibleHogs = hogs
    .filter((hog) => !hog.hidden)
    .filter((hog) => (showGreasedOnly ? hog.greased : true));

  //Sort by name or weight 
  const sortedHogs = [...visibleHogs].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "weight") {
      return a.weight - b.weight;
    }
    return 0;
  });

  return (
    <div className="ui container">
      <h1 className="ui header">Hogwild</h1>
      <FilterBar
        showGreasedOnly={showGreasedOnly}
        onToggleGreased={handleToggleGreased}
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />
      <HogForm onAddHog={handleAddHog} />
      <HogList hogs={sortedHogs} onHideHog={handleHideHog} />
    </div>
  );
}

export default App;
