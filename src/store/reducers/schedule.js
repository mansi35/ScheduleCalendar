/* eslint-disable default-param-last */
import { FETCH_SCHEDULE, CREATE_SCHEDULE, UPDATE_SCHEDULE, DELETE_SCHEDULE } from '../../constants/actionTypes';

const scheduleReducer = (state = { schedules: [] }, action) => {
  switch (action.type) {
    case FETCH_SCHEDULE:
      return { ...state, schedules: action.payload };

    case CREATE_SCHEDULE:
      return { ...state, schedules: [...state.schedules, action.payload] };

    case UPDATE_SCHEDULE:
      return { ...state, schedules: state.schedules.map((schedule) => (schedule.id === action.payload.id ? action.payload : schedule)) };

    case DELETE_SCHEDULE:
      return { ...state, schedules: state.schedules.filter((schedule) => schedule.id !== action.payload) };

    default:
      return state;
  }
};

export default scheduleReducer;
