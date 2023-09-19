import React from 'react'
import ReactDOM from 'react-dom/client'

import Book from './Book'
import { books } from './books'
import './index.css'

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className='booklist'>
        {books.map((book, i) => {
          const { id } = book
          const rank = i + 1
          return (
            <Book {...book} key={id} rank={rank}/>
          )
        })}
      </section>
    </>
  )
};

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);