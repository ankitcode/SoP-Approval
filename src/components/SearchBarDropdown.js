import React from "react";

function SearchBarDropdown(props) {
  const { options, onInputChange } = props;
  return (
    <div className="search-bar-dropdown">
      <input
        type="text"
        className="form-control"
        placeholder="Search Employee"
        onChange={onInputChange}
      />
      <ul className="list-group">
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              className="list-group list-group-item-action"
            >
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchBarDropdown;
