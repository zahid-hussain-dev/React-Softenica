import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    showDropdown: false,
    showDropdownuser: false,
    showFeatures:{},
    showPrice:999,
   

  },
  reducers: {
    setshowDropdown(state, action) {
      state.showDropdown = action.payload;
    },
  
    setshowDropdownuser(state, action) {
      state.showDropdownuser = action.payload;
    },
    setshowFeatures(state, action) {
      state.showFeatures = action.payload;
    },
    setshowPrice(state, action) {
      state.showPrice = action.payload;
    },
    
  },
});

export const { setshowDropdown,setshowDropdownuser,setshowFeatures,setshowPrice} = userSlice.actions;

export default userSlice.reducer;
