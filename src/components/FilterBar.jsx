//provides UI for filtering and sorthing hogs 
import React from "react";

function FilterBar({
  showGreasedOnly,
  onToggleGreased,
  sortBy,
  onSortChange,
}) {
  function handleGreasedChange() {
    onToggleGreased();
  }

  function handleSortChange(event) {
    onSortChange(event.target.value);
  }

  return (
    <div className="ui form">
      <div className="inline fields">
        <div className="field">
          <div className="ui checkbox">
            <input
              type="checkbox"
              id="greased"
              checked={showGreasedOnly}
              onChange={handleGreasedChange}
            />
            <label htmlFor="greased">Greased Pigs Only?</label>
          </div>
        </div>

        <div className="field">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            className="ui dropdown"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="none">None</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
