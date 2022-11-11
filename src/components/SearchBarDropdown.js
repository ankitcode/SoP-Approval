import React, { useRef, useEffect } from "react";
import { useState } from "react";

function SearchBarDropdown(props) {
  const { options, onInputChange, setSendToUserDetails } = props;
  const ulRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    try {
      inputRef.current.addEventListener("click", (event) => {
        event.stopPropagation();
        ulRef.current.style.display = "flex";
        onInputChange(event);
      });
      document.addEventListener("click", (event) => {
        if (ulRef["current"]) ulRef.current.style.display = "none";
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="search-bar-dropdown">
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder="Search Employee"
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul id="results" className="list-group" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
                setSendToUserDetails(inputRef.current.value);
              }}
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
