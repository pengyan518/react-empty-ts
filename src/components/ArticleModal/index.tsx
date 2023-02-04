import React, {useEffect, useCallback, useState, useLayoutEffect, useRef, createRef, useMemo} from 'react'
import axios from 'axios'
import {useQuery, useQueryClient, QueryClient, QueryClientProvider} from '@tanstack/react-query'

import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import config from '../../config'
import {Box, DialogInner, Wrapper, Close, ViewAs, Header, NextBtn, PrevBtn, Title} from './styles'
import Hero from './Hero'
import useDisabled from '../../hooks/useDisabled'
import Body from './Body'
import ChevronLeft from '../Icons/ChevronLeft'
import ChevronRight from '../Icons/ChevronRight'
import Post from './Post'
import CloseIcon from '../Icons/CloseIcon'
import {ContentProps} from '../../types'

interface ContentApi {
  ext?: {
    imageTopHeaderData?: any
    imageDataDisplay?: any
    imageGalleryData?: any
    introduction?: any
    text?: any
    body?: any
    url?: string
    imageGalleryIdData?: any
  }
  title?: string
  content?: {
    commentDisplay?: string
    commentEnable?: string
  }
}

interface ArticleModalBaseProps {
  eid: string | null
  handleClose: any
  setArticleEid: any
}

// eslint-disable-next-line @typescript-eslint/ban-types
type ArticleModalProps<T extends {}> = Partial<Record<keyof T, ArticleModalBaseProps>>

export default function ArticleModal({eid, handleClose, setArticleEid}: ArticleModalBaseProps) {
  const {content, articles} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  const [currentEid, setCurrentEid] = useState(eid)
  //
  // const dispatch = useAppDispatch()

  // let image = getImageById(Number(id))
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  const currentIndex = eid && articles ? articles.indexOf(eid) : -1
  const cIndex = useRef(currentIndex)

  const prevEid = useCallback(() => {
    if (articles) {
      if (cIndex.current > 0) {
        setCurrentEid(articles[cIndex.current - 1])
        cIndex.current -= 1
      } else {
        setCurrentEid(articles[articles.length - 1])
        cIndex.current = articles.length - 1
      }
    }
  }, [articles])
  const nextEid = useCallback(() => {
    if (articles) {
      if (cIndex.current < articles.length - 1) {
        setCurrentEid(articles[cIndex.current + 1])
        cIndex.current += 1
      } else {
        setCurrentEid(articles[0])
        cIndex.current = 0
      }
    }
  }, [articles])

  return (
    <Wrapper className="lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50  supports-scrollbars:pr-2 ">
      {/* @ts-ignore */}
      <Close className="absolute cursor-pointer text-white hover:text-white" onClick={handleClose}>
        {/* @ts-ignore */}
        <CloseIcon className="w-10 h-10" />
      </Close>
      <PrevBtn onClick={prevEid} className="absolute cursor-pointer text-white hover:text-white">
        {/*  @ts-ignore */}
        <ChevronLeft className="h-9 w-9 ml-2" viewBox="0 0 16 16" />
      </PrevBtn>
      <NextBtn onClick={nextEid} className="absolute cursor-pointer text-white hover:text-white">
        {/*  @ts-ignore */}
        <ChevronRight className="h-9 w-9" viewBox="0 0 16 16" />
      </NextBtn>

      <DialogInner className="ps-r">
        <Post eid={currentEid} />
      </DialogInner>
    </Wrapper>
  )
}
