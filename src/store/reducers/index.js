import { combineReducers } from 'redux';
import scheduleReducer from './schedule';

export default combineReducers({
  schedules: scheduleReducer,
});
