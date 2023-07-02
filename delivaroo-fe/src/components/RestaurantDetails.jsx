import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurntById } from "../redux/reducers/restaurantSlice";
import { useHistory, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";

const RestaurantDetailsComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { restaurant, loading, error } = useSelector(
    (state) => state.restaurantSlice
  );

  useEffect(() => {
    dispatch(fetchRestaurntById(id));
  }, [dispatch, id]);

  const handleGoBack = () => {
    history.push("/");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
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
            justifyContent: "space-around",
          }}
        >
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bookstore-81666.appspot.com/o/The-portal-tree-1242023.png?alt=media&token=91242a67-016e-4067-bd5e-5b32b40a9a98"
              alt={restaurant.name}
              style={{ width: "100%", height: "auto", maxWidth: "500px" }}
            />
          </div>
          <div>
            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
              {restaurant.name}
            </Typography>
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
            <Button variant="contained" color="secondary">
              Button 2
            </Button>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default RestaurantDetailsComponent;
