import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from '../views/Home'
import Details from '../views/Details'
import Results from '../views/Results'


const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/> } />
                <Route path='/details' element={ <Details/>} />
                <Route path='/results' element={ <Results/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas