import { CREATE_SCHEDULE, FETCH_SCHEDULE, UPDATE_SCHEDULE, DELETE_SCHEDULE } from '../constants/actionTypes';
import * as api from '../api/index';

export const getSchedule = (mhpId) => async (dispatch) => {
  try {
    const { data } = await api.fetchSchedule(mhpId);
    dispatch({ type: FETCH_SCHEDULE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createSchedule = (schedule) => async (dispatch) => {
  try {
    const { data } = await api.createSchedule(schedule);
    dispatch({ type: CREATE_SCHEDULE, payload: data });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSchedule = (scheduleId, schedule) => async (dispatch) => {
  try {
    const { data } = await api.updateSchedule(scheduleId, schedule);
    console.log(data);
    dispatch({ type: UPDATE_SCHEDULE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const requestReschedule = (scheduleId) => async (dispatch) => {
  try {
    const { data } = await api.requestReschedule(scheduleId);
    console.log(data);
    dispatch({ type: UPDATE_SCHEDULE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const cancelRequestReschedule = (scheduleId) => async (dispatch) => {
  try {
    const { data } = await api.cancelRequestReschedule(scheduleId);
    console.log(data);
    dispatch({ type: UPDATE_SCHEDULE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMhpSchedule = (id) => async (dispatch) => {
  try {
    await api.deleteSchedule(id);
    dispatch({ type: DELETE_SCHEDULE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
