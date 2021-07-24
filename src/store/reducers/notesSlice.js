import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { firebaseApp } from "../../firebase";

const initialState = {
    notes: [],
    status: 'idle',
    error: null
}

const storageRef = firebaseApp.storage().ref();



export const setFiles =  createAsyncThunk('notes/setFiles', async() => {
    const temp = []
   await storageRef.listAll().then(function (result) {
        let path = storageRef.fullPath
        result.items.forEach(fileRef => {
            temp.push({ name: fileRef.name, url: "https://firebasestorage.googleapis.com/v0/b/dsawebapp-f3872.appspot.com/o/" + fileRef.name + "?alt=media" })

        });
    }).then(() => {

        // set data in your any state variable for later use
        //initialState.notes.push(temp)
        console.log("temp is", temp)
    }).catch(error => {
        console.log(error);
    })

    return temp
})

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {},
    extraReducers: {
        [setFiles.pending]: (state, action) => {
            state.status = 'loading'
        },
        [setFiles.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.notes = state.notes.concat(action.payload)
        },
        [setFiles.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})


export default notesSlice.reducer

//export const selectAllNotes = state => state.notes