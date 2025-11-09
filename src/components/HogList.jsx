//renders the viasible hogs using the hog card component
import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs, onHideHog }) {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <div key={hog.id} className="ui eight wide column">
          <HogCard hog={hog} onHide={() => onHideHog(hog.id)} />
        </div>
      ))}
    </div>
  );
}

export default HogList;
