import { useState, useEffect } from "react"
import SpotifyPlayer from 'react-spotify-web-playback';
import { useSearchParams } from 'react-router-dom';
export default function PlayerConrols({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false)
 const [searchParams] = useSearchParams();
  console.log(searchParams); 
  useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}
