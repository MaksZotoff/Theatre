import {
  RETRIEVE_USER,
  UPDATE_USER,
  DELETE_USER,
  

    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SET_MESSAGE,
} from "./types";

import AdminService from "../services/admin.service";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const register = (login, email, pass) => (dispatch) => {
  return AdminService.register(login, email, pass).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};


export const retrieveUser = () => async (dispatch) => {
  try {
  const res = await AdminService.findAll();

  dispatch({
      type: RETRIEVE_USER,
      payload: res.data,
  });
  } catch (err) {
  console.log(err);
  }
};

export const updateUser = (id_user, data) => async (dispatch) => {
  try {
  const res = await AdminService.update(id_user, data);

  dispatch({
      type: UPDATE_USER,
      payload: data,
  });

  return Promise.resolve(res.data);
  } catch (err) {
  return Promise.reject(err);
  }
};

export const deleteUser = (id_user) => async (dispatch) => {
  try {
  await AdminService.delete(id_user);

  dispatch({
      type: DELETE_USER,
      payload: { id_user },
  });
  } catch (err) {
  console.log(err);
  }
};









/*
 export const deleteUser = (id_user) => async (dispatch) =>{
     try{
        await UserService.delete(id_user);

        dispatch({
            type: DELETE_USER,
            payload: {id_user},
        });
     }catch(err){
         console.log(err);
     }
     };
  */