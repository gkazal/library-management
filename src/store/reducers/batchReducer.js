import * as types from "../types";

const initialStates = {
  allBatches: [],
  singleBatch: {},
};

const allBatches = (state = initialStates, action) => {
  switch (action.type) {
    case types.FETCH_ALL_BATCHES:
      return {
        ...state,
        allBatches: action.payload,
      };

    case types.FETCH_BATCH:
      return {
        ...state,
        singleBatch: action.payload,
      };

    default:
      return state;
  }
};

export default allBatches;
