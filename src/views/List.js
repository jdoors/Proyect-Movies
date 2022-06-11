import React from 'react'
import { moviesApi } from '../redux/movies'


const List = ({data}) => {
  return data?.map(book =>(
    <div key={book.id}>
      <div>{book.cover}</div>
      <p>{book.name}</p>
      
    </div>
  ));
    
  
}

export default List