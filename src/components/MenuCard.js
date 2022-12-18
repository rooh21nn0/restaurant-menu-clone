import React from "react";

export default function MenuCard({menuData}) {
  return (
    <>
      <section className="main-card--cointainer">

    {menuData.map((currElem)=>{

        const{id,name,category,image,description}=currElem;
        return(
<>
<div className="card-container "key={currElem.id}>
    <div className="card">
       <div className="card-body">
        <span className="card-number card-circle subtle">{id}</span>
        <span className="card-author subtle">{category}</span>
        <h2 className="card-title">{name}</h2>
        <span className="card-description subtle">
          MAGGI Noodles is fortified with Vitamin A, Iron and Iodine.
          Vitamin A deficiency can cause night-blindness and hindered
          growth. Iron deficiency can cause anemia. Iodine deficiency can
          cause goiter disease and mental growth hindrance.
        </span>
        <div className="card-read">Read</div>
      </div>
      <img src={image} alt="images" className="card-media"></img>
      <span className="card-tag subtle">Order Now</span>
    </div>
  </div>
  </>
        );
    })}
    </section>
    </>
  );
};









