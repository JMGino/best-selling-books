import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    author: 'Mark R. Levin',
    title: 'The Democrate Party Hates America',
    img: 'https://m.media-amazon.com/images/I/61sp+sMfrXL._SL1500_.jpg',
    id: 1
  },
  {
    author: 'Walter Isaacson',
    title: 'Elon Musk',
    img: 'https://m.media-amazon.com/images/I/814mI0-rkxL._SL1500_.jpg',
    id: 2
  },
  {
    author: 'Arthur C. Brooks',
    title: 'Build the Life You Want: The Art and Science of Getting Happier',
    img: 'https://m.media-amazon.com/images/I/81+MJor-K6L._SL1500_.jpg',
    id: 3
  }
];

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { id } = book
        return (
          <Book {...book} key={id}/>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  const { author, title, img } = props
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />)