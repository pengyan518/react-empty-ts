import React, {useEffect, useState, memo, useCallback, useRef, useMemo} from 'react'
import videojs from 'video.js'
import ModalVideo from './ModalVideo'
import Video from '../VideoPlayer'
import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {RootState} from '../../app/store'
import {setModalStatus} from '../../features/intro/introSlice'
import './modal-video.css'

interface ContentProps {
  content?: any
  status?: string
  modalIsOpened: boolean
}

const ModalVideoFrame: React.FC = () => {
  const {content, status, modalIsOpened} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  const {contentExt: {miscData:{promoVideo}}, langCode} = content

  const dispatch = useAppDispatch()
  const closeVideo = () => {
    dispatch(setModalStatus(false))
    // document.body.classList.remove('AddBlurFilter')
    // if (document.body.classList.contains('DarkArrow')) document.body.classList.remove('DarkArrow')
  }

  const playerRef = useRef<any>(null)

  const videoLink = useMemo(() => {
    switch (langCode) {
      case 'zh-tw':
      case 'zh-cn':
        return 'https://media1.shenyun.com/video/2021/Chinese/SY_Intro%202021_CH_720.mp4'
      default:
        return 'https://media1.shenyun.com/video/2021/SY_Intro 2021_EN_720.mp4'
    }
  }, [langCode])

  const videoJsOptions = useMemo(
    () => ({
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: promoVideo??videoLink,
          type: 'video/mp4',
        },
      ],
    }),
    [promoVideo, videoLink]
  )
  const handlePlayerReady = (player: {on: (arg0: string, arg1: {(): void; (): void}) => void} | null) => {
    playerRef.current = player
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    player &&
      player.on('waiting', () => {
        videojs.log('player is waiting')
      })
    // @ts-ignore
    player.on('dispose', () => {
      videojs.log('player will dispose')
    })
  }

  // @ts-ignore

  return (
    <ModalVideo
      channel="custom"
      // @ts-ignore
      autoplay
      isOpen={modalIsOpened}
      onClose={closeVideo}
      modalVideoBodyWidth={1600}>
      <Video options={videoJsOptions} onReady={handlePlayerReady} />
    </ModalVideo>
  )
}

export default ModalVideoFrame
