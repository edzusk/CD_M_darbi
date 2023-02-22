import { createSlice, Draft } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

export type Habitat = 'Jungle' | 'Sea' | 'Forest' | 'Desert'

export type Animal = {
  name: string,
  imageUrl : string,
  habitat: Habitat,
  // id: string
}

export type  AnimalList = {
  animals: Animal[]
}

const getStoredAnimals = () => {
  const storageStatuss = localStorage.getItem('animals');
  const storedAnimals: Animal[] = storageStatuss ? JSON.parse(storageStatuss) : [];
  return storedAnimals
}

const initialState: AnimalList = {
  animals: getStoredAnimals(),
}

export const animalSlice = createSlice({
  name: 'animalList',
  initialState,
  reducers: {
    addAnimal: (state, action:PayloadAction<Animal>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.animals.push(action.payload);
      localStorage.setItem('animals', JSON.stringify(state.animals));
    },
    getAnimals: (state) => {
      state.animals = getStoredAnimals()
    },
    filter: (state, action: PayloadAction<Habitat>) => {
      state.animals =  getStoredAnimals().filter(animal => animal.habitat === action.payload )
    },
    removeAnimal: (state, action: PayloadAction<Animal["name"]>) => {
      state.animals = getStoredAnimals().filter(animal => animal.name !== action.payload )
      localStorage.setItem('animals', JSON.stringify(state.animals));
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAnimal, filter, removeAnimal, getAnimals } = animalSlice.actions

export default animalSlice.reducer