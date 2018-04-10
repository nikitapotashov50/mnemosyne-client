import {
  STORE_PAGE_UNLOADED,
  ASYNC_START
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case STORE_PAGE_UNLOADED:
      return {};
    case ASYNC_START:
      return {
        ...state,
        inProgress: true
      };
    default:
      return state;
  }
};
