import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import pokemonSlice from "../features/pokemon/pokemonSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        pokemon: pokemonSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch