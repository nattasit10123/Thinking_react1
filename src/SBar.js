import React from "react";


export default function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
  }) {
    return (
      <form class="form-all">
        <input class="from-search"
          type="text" 
          value={filterText} placeholder="Search..." 
          onChange={(e) => onFilterTextChange(e.target.value)} />
        <label class ="check">
          <input 
            type="checkbox" 
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }