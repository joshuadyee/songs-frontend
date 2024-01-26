export function SongsShow(props) {

  const handleSubmit = event => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onUpdateSong(props.song.id, params)
  }

  const handleClick = () => {
    console.log("destroy")
    props.onDestroySong(props.song)
  }
  return (
    <div>
      <h1>Song Info</h1>
      <p>Title: {props.song.title}</p>
      <p>Artist: {props.song.artist}</p>
      <p>Album: {props.song.album}</p>
      <p>Year: {props.song.year}</p>

      <form onSubmit={handleSubmit}>
        <div>Title: <input type="text" name="title"/></div>
        <div>Artist: <input type="text" name="artist"/></div>
        <div>Album: <input type="text" name="album"/></div>
        <div>Year: <input type="text" name="year"/></div>
        <button type="submit">Update Song</button>
        <button onClick={handleClick}>Delete Song</button>
      </form>
    </div>

  )
}