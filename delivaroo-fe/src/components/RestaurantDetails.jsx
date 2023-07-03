import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurntById } from "../redux/reducers/restaurantSlice";
import { fetchDishData } from "../redux/reducers/dishSlice";
import { fetchMenuData } from "../redux/reducers/menuSlice";
import { useHistory, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import DishCard from "./Dish/Dish";
import RestaurantInfo from "../components/RestaurantInfo/RestaurantInfo"; // Import the RestaurantInfo component


const RestaurantDetailsComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { restaurant, loading, error } = useSelector(
    (state) => state.restaurantSlice
  );
  const { data } = useSelector((state) => state.dishSlice);
  const { MenuData } = useSelector((state) => state.menuSlice);

  useEffect(() => {
    dispatch(fetchRestaurntById(id));
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(fetchDishData());
    dispatch(fetchMenuData());
  }, [dispatch, id]);

  const handleGoBack = () => {
    history.push("/");
  };
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (item) => {
    setClickedItem(item.id === clickedItem?.id ? null : item);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ margin: "10px" }}>
      <Box mt={2} mx={2}>
        <Box display="flex" alignItems="center" mb={2}>
          <IconButton onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Back</Typography>
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bookstore-81666.appspot.com/o/The-portal-tree-1242023.png?alt=media&token=91242a67-016e-4067-bd5e-5b32b40a9a98"
                alt={restaurant.name}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "500px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div>
              <RestaurantInfo restaurant={restaurant}/>
            </div>
          </div>

          <div>
            <Box display="flex" flexDirection="column" alignItems="flex-end">
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  mb: 2,
                  color: "darkgrey",
                  "& .MuiSvgIcon-root": {
                    marginRight: "8px",
                  },
                }}
              >
                <DeliveryDiningOutlinedIcon />
                Deliver
              </Button>
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  mb: 2,
                  color: "darkgrey",
                  "& .MuiSvgIcon-root": {
                    marginRight: "8px",
                  },
                }}
              >
                <PeopleOutlineOutlinedIcon />
                Start group order
              </Button>
            </Box>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "20px",
            borderTop: "2px solid grey",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            marginBottom: "20px",
            marginTop: "10px",
            position: "sticky",
            top: "-3px",
            zIndex: 1,
            backgroundColor: "#fff",
          }}
        >
          {MenuData.map((item) => (
            <Typography
              key={item.id}
              variant="body2"
              sx={{
                cursor: "pointer",
                color: clickedItem?.id === item.id ? "white" : "#00ccbc",
                backgroundColor: clickedItem?.id === item.id ? "#00ccbc" : "transparent",
                padding: "10px 15px",
                borderRadius: "4px",
              }}
              onClick={() => handleItemClick(item)}
            >
              {item.name}
            </Typography>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {data.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </Box>
    </div>
  );
};

export default RestaurantDetailsComponent;
