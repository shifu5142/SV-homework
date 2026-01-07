import React, { useState } from "react";

function MenuProducts({ deviceArr, categorySet, setFilter }) {
  return (
    <>
      <div className="selector-container">
        <select value={"null"} onChange={setFilter}>
          <option value="all">All Categories</option>;
          {categorySet.map((value, i) => (
            <option value={value} key={i}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <main className="shop-body">
        {deviceArr.map((value) => (
          <a href="#" className="device-card" key={value.id}>
            {/* <img src={value.images[0]} alt={value.title} /> */}
            {value.title}
            <br />{" "}
            <span className="prod-price">{Math.round(value.price)}$</span>
          </a>
        ))}
      </main>
    </>
  );
}

export default MenuProducts;
