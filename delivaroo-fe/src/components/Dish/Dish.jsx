import React from "react";

const DishCard = ({ dish }) => {
  const { name, price, imageUrl } = dish;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "10px",
        maxWidth: "300px",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{name}</div>

      <div style={{ marginBottom: "10px" }}>{price}</div>
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100%", height: "auto", borderRadius: "4px" }}
      />
    </div>
  );
};

export default DishCard;
