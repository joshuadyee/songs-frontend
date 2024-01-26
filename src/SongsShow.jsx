export function SongsShow(props) {
  return (
    <div>
      <h1>Song Info</h1>
      <p>Title: {props.song.title}</p>
      <p>Artist: {props.song.artist}</p>
      <p>Album: {props.song.album}</p>
      <p>Year: {props.song.year}</p>
    </div>
  )
}