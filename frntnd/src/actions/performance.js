import {
    CREATE_PERFORMANCE,
    RETRIEVE_PERFORMANCE,
    UPDATE_PERFORMANCE,
    DELETE_PERFORMANCE,
} from "./types";


import PerformanceService from "../services/performance.service";

export const createPerformance = ( title, autor, duration, genre   ) => async (dispatch) => {
    try {
    const res = await PerformanceService.create({ title, autor, duration, genre   });

    dispatch({
        type: CREATE_PERFORMANCE,
        payload: res.data,
    });

    return Promise.resolve(res.data);
    } catch (err) {
    return Promise.reject(err);
    }
};

export const retrievePerformance = () => async (dispatch) => {
    try {
    const res = await PerformanceService.findAll();

    dispatch({
        type: RETRIEVE_PERFORMANCE,
        payload: res.data,
    });
    } catch (err) {
    console.log(err);
    }
};

export const updatePerformance = (id_performance, data) => async (dispatch) => {
    try {
    const res = await PerformanceService.update(id_performance, data);

    dispatch({
        type: UPDATE_PERFORMANCE,
        payload: data,
    });

    return Promise.resolve(res.data);
    } catch (err) {
    return Promise.reject(err);
    }
};

export const deletePerformance = (id_performance) => async (dispatch) => {
    try {
    await PerformanceService.delete(id_performance);

    dispatch({
        type: DELETE_PERFORMANCE,
        payload: { id_performance },
    });
    } catch (err) {
    console.log(err);
    }
};
