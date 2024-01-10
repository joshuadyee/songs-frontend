export function SongsIndex(props) {
  return (
    <div id="song-index">
      <h1>Songs</h1>
      {props.songs.map(song => (
        <div key={song.id}>
          <h2>{song.name}</h2>
          <p>Artist: {song.artist}</p>
          <p>Album: {song.album}</p>
          <p>Year: {song.year}</p>
        </div>
      ))}
    </div>
  )
}