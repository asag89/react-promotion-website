
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoggedIn: false,
    isLoading: false,
    isError: false,
    message: "",

    selectedTag: null,
    tagsData: null,
    promotionsData: null,
    promotionDetailData: null,
}


export const getTags = createAsyncThunk("app/getTags", async (_, thunkAPI) => {
    try {
        const { data } = await axios.get(`${url}/tags/list`, {
            headers: {
                'Content-Type': 'application/json',
                "X-Country-Id": "TR",
                "X-Language-Id": "TR"
            }
        })
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getPromotions = createAsyncThunk("app/getPromotions", async (_, thunkAPI) => {
    try {
        const { data } = await axios.get(`${url}/promotions/list?Channel=PWA`, {
            headers: {
                'Content-Type': 'application/json',
                "X-Country-Id": "TR",
                "X-Language-Id": "TR"
            }
        })
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getPromotionDetails = createAsyncThunk("app/getPromotionDetails", async (id, thunkAPI) => {
    try {
        const { data } = await axios(`${url}/promotions?Id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                "X-Country-Id": "TR",
                "X-Language-Id": "TR"
            }
        })
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setSelectedTag: (state, action) => {
            state.selectedTag = action.payload
        },
        loginUser: (state, action) => {
            state.isLoggedIn = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            // get tags
            .addCase(getTags.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTags.fulfilled, (state, action) => {
                state.isLoading = false
                state.tagsData = action.payload
            })
            .addCase(getTags.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

            })

            // get promotions
            .addCase(getPromotions.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPromotions.fulfilled, (state, action) => {
                state.isLoading = false
                state.promotionsData = action.payload
            })
            .addCase(getPromotions.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })


            // get promotion details
            .addCase(getPromotionDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPromotionDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.promotionDetailData = action.payload
            })
            .addCase(getPromotionDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })



    }
})

export const {
    setSelectedTag,
    loginUser

} = appSlice.actions

export default appSlice.reducer