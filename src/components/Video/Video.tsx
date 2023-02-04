import React, {useCallback} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import ShenYunText from '../../assets/svg/shenyun-zhuanshu.svg'
import {Figure, Label} from './styles'
import Play from '../Icons/Play'
import {setModalStatus} from '../../features/intro/introSlice'
import useIntersectionObserverProgressiveImg from '../../hooks/useIntersectionObserverProgressiveImg'
import bg from '../../assets/images/wisy-video.jpg'
import bgsm from '../../assets/images/wisy-video_sm.jpg'
import FancyImageHover from '../FancyImageHover'
// export type VideoProps = {}

interface ContentProps {
  content?: any
  status?: string
}

export default function Video() {
  const {content, status} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  const {contentExt} = content
  const {body, miscData} = contentExt
  const {about_us, about_us_title, premier_ccd} = miscData
  const [_, title, contentBody, videoLabel, time] = premier_ccd.split('###')

  const dispatch = useAppDispatch()

  const {src, ref, blur, isVisible} = useIntersectionObserverProgressiveImg(bgsm, bg)

  const openModal = useCallback(() => dispatch(setModalStatus(true)), [dispatch])


    // @ts-ignore
    return (
    <div className="text-center px-4 sm:w-8/12 2xl:w-7/12 mx-auto">
      <div className="w-[30px] text-[#b18a53] mx-auto pt-24 pb-6">
        <img className="object-cover w-[30px] h-[105px] block" src={ShenYunText} />
      </div>
      <div className="Garamond__font text-[#b18a53] text-[1.8rem] font-medium" dangerouslySetInnerHTML={{__html: title}} />
      <Label
        className="Garamond__font text-[2.4rem] font-bold leading-tight mt-10 md:w-9/12 mx-auto"
        dangerouslySetInnerHTML={{__html: contentBody}}
      />
      <div onClick={openModal} className="cursor-pointer pt-24 pb-24">
        <div className="block relative w-full md:w-auto">
          <FancyImageHover className="rounded-[26px]">
            <Figure
              ref={ref}
              className={`mx-auto AspectRatio ${
                isVisible && !blur ? 'progressive--is-loaded' : 'progressive--not-loaded'
              }`}
              dataSrc={src}
            >
            <Play className="w-16 h-16 absolute right-14 bottom-14 text-white drop-shadow-lg" />
            </Figure>
          </FancyImageHover>
        </div>
        <div className="text-right pr-8 py-4 text-[#b28951] OpenSans__font">
          <span className="font-semibold" dangerouslySetInnerHTML={{__html: videoLabel}} /> |{' '}
          <span dangerouslySetInnerHTML={{__html: time}} />
        </div>
      </div>
    </div>
  )
}
