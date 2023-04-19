import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./event-service";
// import {createEvent, deleteEvent, findEvents, updateEvent} from "./event-service";

export const findEventsThunk = createAsyncThunk(
    'events/findEvents',
    async () => await service.findEvents()
)
export const deleteEventThunk = createAsyncThunk(
    'events/deleteEvent',
    async (id) => {
      await service.deleteEvent(id)
      return id
    })
export const createEventThunk = createAsyncThunk(
    'events/createEvent',
    async (event) => {
      const newEvent = await service.createEvent(event)
      return newEvent
    })
export const updateEventThunk = createAsyncThunk(
    'events/updateEvent',
    async (event) => {
      await service.updateEvent(event);
      return event
    }
)