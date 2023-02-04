import React, {useEffect, useCallback, useState, ChangeEvent, useRef} from 'react'
import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {RootState} from '../../app/store'
import Logo from './BeigeGrad.svg'
import {Container, Figure, ContentWrapper, Header} from './styles'

import bg from '../../assets/images/topArea__bg.jpg'
import bg_sm from '../../assets/images/topArea__bg_sm.jpg'
import useIntersectionObserverProgressiveImg from '../../hooks/useIntersectionObserverProgressiveImg'
import useRect from '../../hooks/useRect'
import useResize from '../../hooks/useResize'
import useFontSize from '../../hooks/useFontSize'
import useSticky from '../../hooks/useSticky'

interface IProps {
  seat?: any
}

interface ContentProps {
  content?: any
  status?: string
}

const TopArea: React.FC<IProps> = () => {
  const {content, status} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  const {title, contentExt, langCode} = content

  const {isSticky, element} = useSticky()

  const {size, root, changeSize} = useRect<HTMLDivElement>([])

  const {src, ref, blur, isVisible} = useIntersectionObserverProgressiveImg(bg_sm, bg)

  // const stickyPosition = useRef<HTMLDivElement | null>(null)
  // const entry = useIntersectionObserver(root, {})

  // const notShowSticky = !!entry?.isIntersecting
  //
  // const dispatch = useAppDispatch()

  useResize(() => {
    changeSize()
  })


  const fontSizeClass = useFontSize({
    spectialLangs: ['de'],
    class1: 'text-[1.7rem]',
    class2: 'text-[1.8rem]',
  })


  // @ts-ignore
  return (
    <div className="bg-[#1c50a2]">
      <Container className="w-full AspectRatio overflow-hidden px-4 md:px-0" dataMinHeight={size.height}>
        <Figure className={isVisible && !blur ? 'progressive--is-loaded' : 'progressive--not-loaded'} ref={ref} dataSrc={src} />
        <div className="absolute top-0 left-0 w-full h-full">
          <div ref={root} className="px-4">
            <div className="w-24 h-24 md:w-52 md:h-48 mt-12 pb-8 mx-auto relative">
              <img src={Logo} alt={title} />
            </div>
            <ContentWrapper className="w-full sm:w-10/12 lg:w-8/12 mx-auto relative Garamond__font">
              <div className="text-center text-[#fcf1a9] text-[1.1rem] md:text-[1.8rem] text-shadow-white" ref={element}>
                {title}
              </div>
              <Header
                langCode={langCode}
                className={`text-center text-white ${fontSizeClass} md:text-[3rem] leading-tight mb-12 mt-6 text-shadow-white`}
                dangerouslySetInnerHTML={{__html: contentExt.introduction}}
              />
              <div
                className="xl:w-[40rem] mx-auto text-[1.3rem] text-[#dae0f1] OpenSans__font regular__p text-shadow-white"
                dangerouslySetInnerHTML={{__html: contentExt.body}}
              />
            </ContentWrapper>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopArea
