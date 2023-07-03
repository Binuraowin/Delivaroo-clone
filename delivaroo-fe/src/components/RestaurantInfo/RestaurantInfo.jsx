import React from "react";
import Typography from "@mui/material/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const RestaurantInfo = ({ restaurant }) => {
  return (
    <div style={{ margin: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ marginBottom: "10px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
          {restaurant.name}
        </Typography>
      </div>
      <div style={{ marginBottom: "10px" }}>
        Chicken·Salads·Healthy
        <br />
        0.20 miles away·Opens at 11:00·£0.99 delivery·£7.00 minimum
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <InfoOutlinedIcon style={{ marginRight: "5px" }} />
        <div>
        Info
        <br />
        Map, allergens, and hygiene rating
        </div>
        <KeyboardArrowRightIcon style={{ marginLeft: "5px", fontSize: "18px", color: "#00ccbc" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StarIcon style={{ marginRight: "5px" }} />
        4.6 Excellent
        <br />
        See all 500 reviews
        <KeyboardArrowRightIcon style={{ marginLeft: "5px", fontSize: "18px", color: "#00ccbc" }} />
      </div>
    </div>
  );
};

export default RestaurantInfo;
