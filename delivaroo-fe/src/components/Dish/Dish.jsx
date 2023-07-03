import React, { useState } from "react";

const DishCard = ({ dish }) => {
  let { name, price, imageUrl } = dish;
  imageUrl = "https://firebasestorage.googleapis.com/v0/b/bookstore-81666.appspot.com/o/The-portal-tree-1242023.png?alt=media&token=91242a67-016e-4067-bd5e-5b32b40a9a98";

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="dish-card"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "20px",
        maxWidth: "300px",
        transition: "box-shadow 0.3s ease-in-out",
        boxShadow: isHovered ? "0 4px 10px rgba(0, 0, 0, 0.4)" : "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          textAlign: "left", 
        }}
      >
        <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{name}</div>
        <div>{price}</div>
      </div>
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100px", height: "100px", borderRadius: "4px", marginBottom: "10px" }}
      />
    </div>
  );
};

export default DishCard;
