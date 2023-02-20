import './assets/cssreset.css'
import './assets/bootstrap-grid.css'
import './App.css'

import {TodoListContext, Task} from './context/context'

import { useEffect, useState } from 'react'

import Hero from './Components/Hero/Hero'
import Header from './Components/Header/Header'
import { getAllTasks } from './utils/routes'
// import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query'

// const queryClient = new QueryClient()

const App = () => {
  // const queryClient = useQueryClient()
  const [todoList, settodoList] = useState<Task[]>([]);

  
  // const {data, isLoading, isError, error} = useQuery<Task[]>(['todoList'], getAllTasks)
  
  // console.log(data)
  // if(!data){
  //   return <h1>Lost data</h1>
  // }
  // settodoList(data)
  
  useEffect(()=> {
    getAllTasks().then((data) => {
      console.log(data)
      settodoList(data)
    });

  },[])

  return (
    // <QueryClientProvider client={queryClient}>
    <TodoListContext.Provider value={{todoList, settodoList}}>
      <Header />
      <Hero />
    </TodoListContext.Provider>
    // </QueryClientProvider>
  )
}

export default App
