export function SongsIndex(props) {
  return (
    <div id="song-index">
      <h1>All Songs</h1>
      {props.songs.map(song => (
        <div key={song.id}>
          <h2>{song.title}</h2>
          <p>{song.artist}</p>
          <p>{song.album}</p>
          <p>{song.year}</p>
          <button onClick={() => props.onShowSong(song)}>More info</button>
          <hr />
        </div>
      ))}
    </div>
  )
}