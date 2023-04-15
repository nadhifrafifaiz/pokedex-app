import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    // forms: Array<INamedApiResource<IPokemonForm>>;
    // game_indices: IVersionGameIndex[];
    // held_items: IPokemonHeldItem[];
    // location_area_encounters: string;
    moves: PokemonMove[];
    sprites: PokemonSprites;
    species: PokemonSpecies;
    stats: PokemonStat[];
    types: PokemonType[];
}
export interface PokemonSpecies {
    name: string,
    url: string
}

export interface PokemonAbility {
    is_hidden: true;
    slot: number;
    ability: {
        name: string
        url: string
    };
}

export interface PokemonMoveVersion {
    level_learned_at: number
    move_learn_method: {
        name: string
        url: string
    }
    version_group: {
        name: string
        url: string
    }
}
export interface PokemonMove {
    move: {
        name: string
        url: string
    };
    version_group_details: PokemonMoveVersion[];
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



type SetPokemons = {
    pokemons: Pokemon[]
    totalCount: number
}

type InitialState = {
    pokemon: Pokemon
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
        },
        setPokemon: (state, action: PayloadAction<Pokemon>) => {
            state.pokemon = action.payload
        }
    }
})

export default pokemonSlice.reducer
export const { setPokemons, setPokemon } = pokemonSlice.actions