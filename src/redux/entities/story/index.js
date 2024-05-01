import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();

export const StorySlice = createSlice({
    name: "story",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectStoryIds: (state) => state.ids,
        selectStoryById: (state, id) => state.entities[id],
    },
})

export const { selectStoryById, selectStoryIds } = StorySlice.selectors;