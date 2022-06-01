import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



import Portada from '../assets/portada.jpg'

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const inputChange = ({ target: { value } }) => {
    setSearch(value);
  }

  const handleSearchClick = () => {
    navigate(`/results/${search.trim()}`)
  }

  const handleCleanClick = () => {
    setSearch('');
  }



  return (
    <div className='flex h-screen overflow-hidden'>
      <div className='w-2/5'>
        <img src={Portada} alt='portada' className='object-cover w-full h-full' />
      </div>

      <div className='flex flex-col items-center justify-center w-3/5 px-10'>
        <h2 className='font-mono text-4xl '>Buscar Pelicula</h2>
        <input className='bg-[#F5F0F0] font-mono w-full my-3 h-9 p-6 
        focus:outline-none focus:border-sky-500 focus:ring-1 focus: ring-red-200 rounded-md'
          value={search}
          onChange={inputChange}
        />

        <div className='flex justify-between w-full '>
          <button className='w-full mr-2 font-mono text-lg bg-red-200 rounded-md shadow-lg hover:bg-red-600 h-9'
            onClick={handleSearchClick}>Buscar</button>
          <button className='w-full ml-2 font-mono text-lg bg-red-200 rounded-md shadow-lg hover:bg-red-600 h-9'
            onClick={handleCleanClick}>Limpiar</button>
        </div>
      </div>
    </div>
  )
}

export default Home