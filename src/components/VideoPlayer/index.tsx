import React, {useEffect, useRef} from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export const VideoJS = (props: {options: any; onReady: any}) => {
  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const {options, onReady} = props

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current

      if (!videoElement) return

      const player: {dispose: () => void} = videojs(videoElement, options, () => {
        videojs.log('player is ready')
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onReady && onReady(player)
      })

      playerRef.current = null

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      // const player = playerRef.current
      // // @ts-ignore
      // player.autoplay(options.autoplay)
      // // @ts-ignore
      // player.src(options.sources)
    }
  }, [onReady, options, videoRef])

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player) {
        // @ts-ignore
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  )
}

export default VideoJS
