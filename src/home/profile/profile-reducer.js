import {createSlice} from "@reduxjs/toolkit";
import profile from './profile.json';

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            const profile = state;
            const lastName = action.payload.lastName;
            const firstName = action.payload.firstName;
            if (lastName) {
                profile.lastName = lastName;
            }
            if (firstName) {
                profile.firstName = firstName;
            }
            const bio = action.payload.bio;
            if (bio) {
                profile.bio = bio;
            }
            const location = action.payload.location;
            if (location) {
                profile.location = location;
            }
            const dateOfBirth = action.payload.dateOfBirth;
            if (dateOfBirth) {
                profile.dateOfBirth = dateOfBirth;
            }

        }

    }

});
// console.log(profile.firstName);
export const {updateProfile} = profileSlice.actions;

export default profileSlice.reducer;