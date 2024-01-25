import { SongsIndex } from "./SongsIndex"
import { SongsNew } from "./SongsNew"
import axios from "axios"
import { useState, useEffect } from "react"

export function Content() {

  // const songs = [
  //   {id: 1, title: "Babe", album: "Styx Hits", artist: "Styx", year: "1974"},
  //   {id: 2, title: "Ruby Tuesday", album: "Greatest Hits", artist: "The Rolling Stones", year: "1976"}
  // ]

    const [songs, setSongs] = useState([])

    const handleSongsIndex = () => {
      console.log("songs index")
      axios.get("http://localhost:3000/songs.json").then(response => {
        console.log(response.data)
        setSongs(response.data)
      })
    }

    const handleCreateSong = (params) => {
      console.log("handleCreateSong", params)
      axios.post("http://localhost:3000/songs.json", params).then(response => {
        setSongs([...songs, response.data])
      })
    }

    useEffect(handleSongsIndex, [])

  return (
    <div>
      <SongsIndex songs={songs}/>
      <SongsNew onCreateSong={handleCreateSong}/>
    </div>
  )
}