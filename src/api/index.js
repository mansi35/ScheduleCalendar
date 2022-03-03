import axios from 'axios';

const API = axios.create({ baseURL: 'https://raahee-server.eastus.cloudapp.azure.com' });
// const API = axios.create({ baseURL: 'http://localhost:1337' });
API.interceptors.request.use((req) => {
  req.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGM2ZjRmYzFiZGExNTNmYjY3MzQ3MCIsImlhdCI6MTY0NjMwNzQzMywiZXhwIjoxNjQ4ODk5NDMzfQ.J5tslqHV8fxg1eRJ7llDDgqxY-hnAdDmJOBqyFivcbA';
  return req;
});

// MHP Schedule API
export const fetchSchedule = (mhpId) => API.get(`/appointment-schedules?mhp=${mhpId}&_sort=startTime:DESC`);
export const createSchedule = (schedule) => API.post('/appointment-schedules/manage', schedule);
export const deleteSchedule = (scheduleId) => API.delete(`/appointment-schedules/manage/${scheduleId}`);
export const updateSchedule = (scheduleId, updatedSchedule) => API.put(`/appointment-schedules/manage/${scheduleId}`, updatedSchedule);
export const requestReschedule = (scheduleId) => API.put(`/appointment-schedules/request-reschedule/${scheduleId}`);
export const cancelRequestReschedule = (scheduleId) => API.put(`/appointment-schedules/cancel-reschedule/${scheduleId}`);
