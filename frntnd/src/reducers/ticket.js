import {
  CREATE_TICKET,
  RETRIEVE_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET,
} from "../actions/types";

const initialState = [];

function ticketReducer(tickets = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TICKET:
      return [...tickets, payload];

    case RETRIEVE_TICKET:
      return payload;

    case UPDATE_TICKET:
      return tickets.map((ticket) => {
        if (ticket.id_ticket === payload.id_ticket) {
          return {
            ...ticket,
            ...payload,
          };
        } else {
          return ticket;
        }
      });

    case DELETE_TICKET:
      return tickets.filter(({ id_ticket }) => id_ticket !== payload.id_ticket);

    default:
      return tickets;
  }
};

export default ticketReducer;