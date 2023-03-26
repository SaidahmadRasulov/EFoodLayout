import React, { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route, RouterProvider } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import { FoodContext, RestContext } from './Context/Context';
import chiz from './assets/chizb.png';
import royel from './assets/royel.png';
import beef from './assets/beef.png';
import black from './assets/black.png';
import restOne from './assets/restOne.png'
import restTwo from './assets/restTwo.png'
import restThree from './assets/restThre.png'
import restFour from './assets/restFo.png'
import restFive from './assets/restFv.png'
import restSix from './assets/restSx.png';
import './App.css'
import SimpleRest from './Pages/SimpleRest';
import Service from './Pages/Service';
import City from './Pages/City';
import Contact from './Pages/Contact';

function App() {

  const [state, setState] = useState([
    {
      id: 1, title: 'Burger', category: 'burger', price: 18, meals: [
        { id: 11, name: 'Cheeseburger With Salad', image: chiz }
      ]
    },
    {
      id: 2, title: 'Cheeseburger With Salad', category: 'burger', price: 15, meals: [
        { id: 12, name: 'Cheeseburger With Salad', image: beef }
      ]
    },
    {
      id: 3, title: 'Beef Burger', category: 'burger', price: 16, meals: [
        { id: 13, name: 'Cheeseburger With Salad', image: black }
      ]
    },
    {
      id: 4, title: 'Royel Cheeseburger', category: 'burger', price: 14, meals: [
        { id: 14, name: 'Cheeseburger With Salad', image: royel }
      ]
    },
    {
      id: 5, title: 'Black Gambugrer ', category: 'burger', price: 15, meals: [
        { id: 15, name: 'Cheeseburger With Salad', image: chiz }
      ]
    }
  ]);

  const [rest, setRest] = useState([
    { id: 1, name: 'Blaze Pizza', time: '11.00 AM - 10.00 PM', image: restOne },
    { id: 2, name: 'Pizza Ranch', time: '09.00 AM - 10.00 PM', image: restTwo },
    { id: 3, name: 'Dion’s Pizza Hut', time: '10.00 AM - 12.00 PM', image: restThree },
    { id: 4, name: 'Royel Burger', time: '11.00 AM - 10.00 PM', image: restFour },
    { id: 5, name: 'KFC Restaurant', time: '09.00 AM - 10.00 PM', image: restFive },
    { id: 6, name: 'Star Food', time: '10.00 AM - 12.00 PM', image: restSix },
  ])

  console.log(state)

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='service' element={<Service />} />
        <Route path='city' element={<City />} />
        <Route path='contact' element={<Contact />} />
        <Route path='restaurant/:id' element={<SimpleRest />} />
      </Route>
    </>
  ))

  return (
    <FoodContext.Provider value={[
      state,
      setState
    ]}>
      <RestContext.Provider value={[rest, setRest]}>
        <RouterProvider router={router}></RouterProvider>
      </RestContext.Provider>
    </FoodContext.Provider>
  )
}

export default App