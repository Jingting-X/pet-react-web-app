import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./details-service"

export const updateDetailThunk =
    createAsyncThunk(
        'details/updateDetail',
        async (detail) =>
            await service.updateDetail(detail)
    )

export const createDetailThunk = createAsyncThunk(
    'dogs/search/details',
    async (imageId) => {
        try {
            return await service.createDetail(imageId);
        } catch (error) {
            throw new Error("An unexpected error occurred.");
        }
    }
);