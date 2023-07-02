import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/reducers/restaurantSlice';

const RestaurantComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.restaurantSlice);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Address: {item.address}</p>
          <p>Created At: {item.createdAt}</p>
          <p>Updated At: {item.updatedAt}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantComponent;
