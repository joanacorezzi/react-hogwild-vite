//form for adding new hogs to the list
import React, { useState } from "react";

function HogForm({ onAddHog }) {
    //forms input
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);
  const [medal, setMedal] = useState("");

  //handle submisison 
  function handleSubmit(event) {
    event.preventDefault();

    //create new hog object
    const newHog = {
      name,
      image,
      specialty,
      greased,
      "highest medal achieved": medal,
      weight: Number(weight),

    };

    //add to parent state
    onAddHog(newHog);

    //reset form
    setName("");
    setImage("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
    setMedal("");
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <h2>Add a New Hog</h2>

      <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="specialty">Specialty:</label>
        <input
          id="specialty"
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="field">
        <div className="ui checkbox">
          <input
            id="greased-form"
            type="checkbox"
            checked={greased}
            onChange={(e) => setGreased(e.target.checked)}
          />
          <label htmlFor="greased-form">Greased?</label>
        </div>
      </div>

      <div className="field">
        <label htmlFor="medal">Highest Medal Achieved:</label>
        <input
          id="medal"
          type="text"
          value={medal}
          onChange={(e) => setMedal(e.target.value)}
        />
      </div>

      <button className="ui button primary" type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;
