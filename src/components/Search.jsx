import React from "react";

export default function Search() {
  return (
    <form action="POST" className="search">
      <label htmlFor="food-search">Search Foods</label>
      <input
        type="text"
        name="food-search"
        id="food-search"
        placeholder="Search Foods..."
      />
    </form>
  );
}
