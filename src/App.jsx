import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Slide from './components/Slide'
import 'flowbite';

const App = () => {
  return (
    <div>
      <Header />
      <Search/>
      <Slide />
    </div>
  )
}

export default App