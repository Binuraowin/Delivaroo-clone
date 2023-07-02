import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/reducers/restaurantSlice";
import { token } from "../redux/reducers/index";
import { useHistory } from "react-router-dom";
import { infoStyle,buttonStyle,itemContainerStyle} from './DataDisplaStyles'

const RestaurantComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data, loading, error } = useSelector(
    (state) => state.restaurantSlice
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(async () => {
    const accessToken = await token();
    localStorage.setItem("authToken", accessToken);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleItemClick = (id) => {
    history.push(`/restaurant/${id}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  {data?.map((item) => (
    <div key={item.id} style={itemContainerStyle}>
      <h2>
        <button style={buttonStyle} onClick={() => handleItemClick(item.id)}>{item.name}</button>
      </h2>
      <p style={infoStyle}>Address: {item.address}</p>
      <p style={infoStyle}>Created At: {item.createdAt}</p>
      <p style={infoStyle}>Updated At: {item.updatedAt}</p>
    </div>
  ))}
</div>

  );
};

export default RestaurantComponent;
