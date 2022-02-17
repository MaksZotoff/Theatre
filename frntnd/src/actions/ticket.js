import {
    CREATE_TICKET,
    RETRIEVE_TICKET,
    UPDATE_TICKET,
    DELETE_TICKET,
} from "./types";


import TicketService from "../services/ticket.service";

export const createTicket = (place,  price, id_performance  ) => async (dispatch) => {
    try {
    const res = await TicketService.create({ place,  price, id_performance  });

    dispatch({
        type: CREATE_TICKET,
        payload: res.data,
    });

    return Promise.resolve(res.data);
    } catch (err) {
    return Promise.reject(err);
    }
};

export const retrieveTicket = () => async (dispatch) => {
    try {
    const res = await TicketService.findAll();

    dispatch({
        type: RETRIEVE_TICKET,
        payload: res.data,
    });
    } catch (err) {
    console.log(err);
    }
};

export const updateTicket = (id_ticket, data) => async (dispatch) => {
    try {
    const res = await TicketService.update(id_ticket, data);

    dispatch({
        type: UPDATE_TICKET,
        payload: data,
    });

    return Promise.resolve(res.data);
    } catch (err) {
    return Promise.reject(err);
    }
};

export const deleteTicket = (id_ticket) => async (dispatch) => {
    try {
    await TicketService.delete(id_ticket);

    dispatch({
        type: DELETE_TICKET,
        payload: { id_ticket },
    });
    } catch (err) {
    console.log(err);
    }
};
