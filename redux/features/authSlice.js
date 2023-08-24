import { createSlice } from '@reduxjs/toolkit';

// interface AuthState {
// 	isAuthenticated: boolean;
// 	isLoading: boolean;
// }

const initialState = {
	isAuthenticated: false,
	isLoading: true,
	user:null,
	profile:{},
	error:null
 } 

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: state => {
			state.isAuthenticated = true;
		},
		logout: state => {
			state.isAuthenticated = false;
		},
		setUser: (state, action)=>{
			state.user = action.payload
		},
		setProfile: (state, action)=>{
			state.profile = action.payload
		},
		setError: (state,action)=>{
			state.error= action.payload
		},
		finishInitialLoad: state => {
			state.isLoading = false;
		},
	},
});

export const { setAuth, logout, setUser,setProfile, setError, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;