import { createSlice } from '@reduxjs/toolkit'

export interface SidebarState {
  value: boolean
}

const initialState: SidebarState = {
  value: true,
}

export const counterSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    },
  },
})

export const { toggle } = counterSlice.actions

export default counterSlice.reducer