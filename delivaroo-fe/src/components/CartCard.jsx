import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const UICard = ({ title, buttonText, onButtonClick }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "20px",
          maxWidth: "300px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          height: "200px",
          width:"350px"
        }}
      >
        <AddShoppingCartOutlinedIcon style={{ fontSize: "32px", color: "#00ccbc" }} />
        <Typography variant="h6" style={{ marginTop: "10px",margin: '5px 0',fontSize: '24px',color: '#555',marginBottom:"80px" }}>
          {title}
        </Typography>
        <div style={{ flex: 1 }}></div>
        <Button
          variant="contained"
          color="inherit"
          onClick={onButtonClick}
          style={{ width: "100%" }}
          sx={{
            mb: 2,
            color: "#555", 
          }}
        >
          {buttonText}
        </Button>
      </div>
    );
  };
  
  export default UICard;
  