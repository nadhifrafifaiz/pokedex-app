import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Pokemon } from '../../interfaces/Pokemon'

type InitialState = {
    pokemon: Pokemon
    pokemons: Pokemon[]
}

const initialState: InitialState = {
    pokemon: {} as Pokemon,
    pokemons: []
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
    }
})

export default pokemonSlice.reducer