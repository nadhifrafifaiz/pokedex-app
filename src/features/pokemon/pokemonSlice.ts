import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    // abilities: IPokemonAbility[];
    // forms: Array<INamedApiResource<IPokemonForm>>;
    // game_indices: IVersionGameIndex[];
    // held_items: IPokemonHeldItem[];
    // location_area_encounters: string;
    // moves: IPokemonMove[];
    sprites: PokemonSprites;
    // species: INamedApiResource<IPokemonSpecies>;
    stats: PokemonStat[];
    types: PokemonType[];
}

export interface PokemonStat {
    stat: { name: string, url: string }
    effort: number;
    base_stat: number;
}

export interface PokemonSprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface PokemonType {
    slot: number;
    type: {
        name: string
        url: string
    };
}

type InitialState = {
    pokemon: Pokemon
    pokemons: Pokemon[]
    totalCount: number
}

type SetPokemons = {
    pokemons: Pokemon[]
    totalCount: number
}

const initialState: InitialState = {
    pokemon: {} as Pokemon,
    pokemons: [],
    totalCount: 0
}



const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action: PayloadAction<SetPokemons>) => {
            state.pokemons = action.payload.pokemons
            state.totalCount = action.payload.totalCount
        }
    }
})

export default pokemonSlice.reducer
export const { setPokemons } = pokemonSlice.actions