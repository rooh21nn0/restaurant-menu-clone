import React, { useState } from "react";
import Menu from "./menuApi";
import "./style.css";
import MenuCard from "./MenuCard";

const uniqeList=[...new Set(Menu.map((cur)=>{
  return cur.category
}))]
// console.log(uniqeList)

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) => {
    const updateList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updateList);
  };

  const lunchItems = (category) => {
    const lunchList = Menu.filter((curElemt) => {
      return curElemt.category === category;
    });
    setMenuData(lunchList);
  };
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => lunchItems("lunch")}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => lunchItems("evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => lunchItems("dinner")}
          >
            Dinner
          </button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
