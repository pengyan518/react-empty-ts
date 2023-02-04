import React, {useEffect, useCallback, useState, useLayoutEffect, useRef, useMemo} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import videojs from 'video.js'

import config from '../../config'
import {HeaderVideo, HeaderImg} from './styles'
import Video from '../VideoPlayer'
// import {setGallery, setModal, setGalleryData, setGalleryCurrent} from '../../features/main/MainSlice'
import {RootState} from '../../app/store'

interface ContentApi {
  contentApi: any
  videoLink: string | null
}
export default function Hero({contentApi, videoLink}: ContentApi) {
  const playerRef = useRef<any>(null)

  const videoJsOptions = useMemo(
    () => ({
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: videoLink,
          type: 'video/mp4',
        },
      ],
    }),
    [videoLink]
  )

  const handlePlayerReady = (player: {on: (arg0: string, arg1: {(): void; (): void}) => void} | null) => {
    playerRef.current = player
    // @ts-ignore
    player.on('waiting', () => {
      videojs.log('player is waiting')
    })
    // @ts-ignore
    player.on('dispose', () => {
      videojs.log('player will dispose')
    })
  }

  // eslint-disable-next-line no-nested-ternary
  const image = contentApi.imageDataDisplay
    ? Array.isArray(contentApi.imageDataDisplay)
      ? contentApi.imageDataDisplay[0].original
      : contentApi.imageDataDisplay.original
    // eslint-disable-next-line no-nested-ternary
    : contentApi.imageIdFeaturedData
      ? Array.isArray(contentApi.imageIdFeaturedData)
        ? contentApi.imageIdFeaturedData[0].original
        : contentApi.imageIdFeaturedData[0].original
      : null

  if (videoLink) {
    // @ts-ignore
    return (
      <HeaderVideo>
        <React.Fragment key={videoLink}>
          <Video options={videoJsOptions} onReady={handlePlayerReady} />
        </React.Fragment>
      </HeaderVideo>
    )
  }

  if (image) {
    return <HeaderImg src={image} className="" alt="" />
  }

  return <></>
}
