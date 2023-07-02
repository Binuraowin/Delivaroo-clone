import React from "react";
import { useHistory } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import InputBase from "@mui/material/InputBase";

const Header = () => {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
        // maxWidth: '400px',
        width: "97%",
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#00ccbc" }}>
        Delivaroo
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <SearchOutlinedIcon />
        <InputBase
          type="text"
          placeholder="Search..."
          style={{ marginRight: "10px", padding: "5px" }}
        />
      </div>

      {/* Right corner: Login Button with Icon and Menu Button */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{
            backgroundColor: "white",
            color: "#2e3333",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            border: "none",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            outline: "none",
            marginRight: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <HouseOutlinedIcon />
            <span style={{ marginRight: "5px" }}> Sign up or log in </span>
          </div>
        </button>
        <button
          style={{
            backgroundColor: "white",
            color: "#00ccbc",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            border: "none",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            outline: "none",
          }}
          onClick={() => history.push(`/`)}
        >
          <span>Menu</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
