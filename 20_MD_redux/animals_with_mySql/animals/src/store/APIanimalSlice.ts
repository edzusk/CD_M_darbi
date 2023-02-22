import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export type Habitat = 'Jungle' | 'Sea' | 'Forest' | 'Desert'

export type Animal = {
  name: string,
  imageUrl : string,
  habitat: Habitat,
  id: number
}
export type NewAnimal = {
  name: string,
  imageUrl : string,
  habitat: Habitat,
}

export const animalApi = createApi({
  reducerPath: 'animalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  tagTypes: ['Animals'],
  endpoints: (builder) => ({
    
    getAllAnimals: builder.query<Animal[], void>({
      query: () => `/animals`,
      providesTags: ['Animals']
    },),

    deleteAnimal: builder.mutation<Animal[], Animal['id']>({
      query: (id) => ({
        url: `/animals/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Animals']
    }),

    addAnimal: builder.mutation<unknown, NewAnimal>({
      query: (animal) => ({
        url:'/animals',
        method: 'POST',
        body: animal
      }),
      invalidatesTags: ['Animals']
    }),

    getAnimalsByHabitat: builder.mutation<Animal[], Animal['habitat']>({
      query: (habitat) => ({
        url: `/animals/${habitat}`,
        method: 'GET',
      }),
      invalidatesTags: ['Animals']
    })
  }),
})
export const { 
  useGetAllAnimalsQuery, 
  useAddAnimalMutation, 
  useDeleteAnimalMutation, 
  useGetAnimalsByHabitatMutation,
} = animalApi
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default animalApi.reducer

