import React from 'react'

const Loading = () => {
    return (
        <div className='flex items-center justify-center flex-col h-full mx-20 my-20'>
            <div className='w-8 h-8 border-4 border-red-300 rounded-full animate-spin'>
               
            </div>
            <p className='mt-3'> Buscando...</p>
        </div>
    )
}

export default Loading