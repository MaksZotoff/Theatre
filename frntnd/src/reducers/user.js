import {
    CREATE_USER,
    RETRIEVE_USER,
    UPDATE_USER,
    DELETE_USER,
  } from "../actions/types";
  
  const initialState = [];
  
  function userReducer(users = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_USER:
        return [...users, payload];
  
      case RETRIEVE_USER:
        return payload;
  
      case UPDATE_USER:
        return users.map((user) => {
          if (user.id_user === payload.id_user) {
            return {
              ...user,
              ...payload,
            };
          } else {
            return user;
          }
        });
  
      case DELETE_USER:
        return users.filter(({ id_user }) => id_user !== payload.id_user);
  
      default:
        return users;
    }
  };
  
  export default userReducer;