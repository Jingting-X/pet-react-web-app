import { createSlice } from "@reduxjs/toolkit";
import {findEventsThunk, deleteEventThunk, createEventThunk, updateEventThunk} from "../services/event-thunks.js";

const initialState = {
  events: [],
  loading: false,
  error: null,
}
const eventSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: {
    [findEventsThunk.pending]:
        (state) => {
          state.loading = true
          state.events = []
        },
    [findEventsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.events = payload
        },
    [findEventsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [deleteEventThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.events = state.events
              .filter(t => t._id !== payload)
        },
    [createEventThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.events.push(payload)
        },

    [updateEventThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const event = state.events
              .findIndex((t) => t._id === payload._id)
          state.events[event] = {
            ...state.events[event],
            ...payload
          }
        }
  },
  reducers:{}
});
export const { updateEvent, deleteEvent, addEvent } = eventSlice.actions;
export default eventSlice.reducer