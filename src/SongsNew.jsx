export function SongsNew(props) {
  
  const handleSubmitSong = event => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onCreateSong(params)
    event.target.reset()
  }

  return (
    <div>
      <h1>New Songs!</h1>
      <form onSubmit={handleSubmitSong}>
        <p>Title: <input name="title" type="text" /></p>
        <p>Artist: <input name="artist" type="text" /></p>
        <p>Album: <input name="album" type="text" /></p>
        <p>Year: <input name="year" type="text" /></p>
        <button type="submit">Add Song</button>
      </form>
    </div>
  )
}