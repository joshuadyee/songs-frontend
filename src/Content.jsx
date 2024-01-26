import { WelcomePage } from "./WelcomePage"
import { SongsIndex } from "./SongsIndex"
import { SongsNew } from "./SongsNew"
import { SongsShow } from "./SongsShow"
import { Modal } from "./Modal"
import axios from "axios"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

export function Content() {

  // const songs = [
  //   {id: 1, title: "Babe", album: "Styx Hits", artist: "Styx", year: "1974"},
  //   {id: 2, title: "Ruby Tuesday", album: "Greatest Hits", artist: "The Rolling Stones", year: "1976"}
  // ]

    const [songs, setSongs] = useState([])

    const [isSongsShowVisible, setIsSongsShowVisible] = useState(false)

    const [currentSong, setCurrentSong] = useState({})

    const handleSongsIndex = () => {
      console.log("songs index")
      axios.get("http://localhost:3000/songs.json").then(response => {
        // console.log(response.data)
        setSongs(response.data)
      })
    }

    const handleCreateSong = (params) => {
      console.log("handleCreateSong", params)
      axios.post("http://localhost:3000/songs.json", params).then(response => {
        setSongs([...songs, response.data])
      })
    }

    const handleShowSong = song => {
      console.log("showing song", song)
      setIsSongsShowVisible(true)
      setCurrentSong(song)
    }

    const handleClose = () => {
      // console.log("handle close")
      setIsSongsShowVisible(false)
    }

    const handleUpdateSong = (id, params) => {
      console.log("updating song", params)
      axios.patch(`http://localhost:3000/songs/${id}.json`, params).then(response => {
        setSongs(
          songs.map(song => {
            if (song.id === response.data.id) {
              return response.data
            } else {
              return song 
            }
          })
        )
        handleClose()
      })
    }

    useEffect(handleSongsIndex, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/songs/index" element={<SongsIndex songs={songs} onShowSong={handleShowSong}/>}/>
        <Route path="/songs/new" element={<SongsNew onCreateSong={handleCreateSong}/>}/>
      </Routes>
      
      <Modal show={isSongsShowVisible} onClose={handleClose}>
        <SongsShow song={currentSong} onUpdateSong={handleUpdateSong}/>
      </Modal>
    </div>
  )
}