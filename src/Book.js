const Book = (props) => {
  const { author, title, img, rank } = props
  return (
    <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <span className='number'>{`# ${rank}`}</span>
    </article>
  )
}

export default Book;