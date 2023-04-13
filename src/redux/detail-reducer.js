import {createSlice} from "@reduxjs/toolkit";
import {updateDetailThunk} from "../services/details-thunks";

const initialState = {
    details: [],
    loading: false
}

const detailSlice = createSlice({
    name: "detail",
    initialState: initialState,
    extraReducers: {
        [updateDetailThunk.fulfilled]:
            (state, {payload}) => {
                console.log("updateDetailThunk called!!!")
                state.loading = false
                const detailIndex = state.detail
                    .findIndex((t) => t._id === payload._id)
                state.detail[detailIndex] = {
                    ...state.detail[detailIndex],
                    ...payload
                }
            }
    },
    reducers: {
        updateLiked(state, action) {
            const detail = state.find((detail) => detail._id === action.payload._id)
            detail.liked = !detail.liked
            if (detail.liked) {
                detail.likes += 1
            } else {
                detail.likes -= 1
            }
        }
    }
})

export const {updateLiked} = detailSlice.actions;
export default detailSlice.reducer;