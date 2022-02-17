import {
  CREATE_PERFORMANCE,
  RETRIEVE_PERFORMANCE,
  UPDATE_PERFORMANCE,
  DELETE_PERFORMANCE,
} from "../actions/types";

const initialState = [];

function performanceReducer(performances = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PERFORMANCE:
      return [...performances, payload];

    case RETRIEVE_PERFORMANCE:
      return payload;

    case UPDATE_PERFORMANCE:
      return performances.map((performance) => {
        if (performance.id_performance === payload.id_performance) {
          return {
            ...performance,
            ...payload,
          };
        } else {
          return performance;
        }
      });

    case DELETE_PERFORMANCE:
      return performances.filter(({ id_performance }) => id_performance !== payload.id_performance);

    default:
      return performances;
  }
};

export default performanceReducer;