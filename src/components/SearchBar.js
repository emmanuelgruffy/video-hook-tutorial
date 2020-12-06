import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
