//displays on hog card with image, name and toggleable details
import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  //check if details are showing or hidding
  const [showDetails, setShowDetails] = useState(false);

  function handleToggleDetails() {
    setShowDetails((prev) => !prev);
  }

  return (
    <div aria-label="hog card" className="ui card">
      <div onClick={handleToggleDetails}>
        <div className="image">
         
          <img src={hog.image} alt={`Photo of ${hog.name}`} />
        </div>
        <div className="content">
          <h3 className="header">{hog.name}</h3>
        </div>
      </div>

      {showDetails && (
        <div className="content">

          <p>{`Specialty: ${hog.specialty}`}</p>

          <p>{hog.weight}</p>

          <p>{hog.greased ? "Greased" : "Nongreased"}</p>

          <p>{hog["highest medal achieved"]}</p>
        </div>
      )}

      <div className="extra content">
        <button className="ui button" onClick={onHide}>
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;
