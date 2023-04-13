import axios from 'axios';
// const EVENTS_API = 'http://localhost:4000/api/events';

const API_BASE = process.env.REACT_APP_API_BASE;
const EVENTS_API = `${API_BASE}/events`;

export const findEvents  = async() => {
  const response = await axios.get(EVENTS_API);
  const events = response.data;
  return events;
}

export const deleteEvent = async (tid) => {
  const response = await axios.delete(`${EVENTS_API}/${tid}`);
  return response.data
}

export const createEvent = async (event) => {
  const response = await axios.post(EVENTS_API, event);
  return response.data;
}

export const updateEvent = async (event) => {
  await axios.put(`${EVENTS_API}/${event._id}`, event);
  return event;
}