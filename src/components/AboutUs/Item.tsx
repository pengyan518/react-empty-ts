import React, { useCallback, useEffect, useRef } from "react";
import {ListItem} from './styles'
import config from '../../config'
import useFontSize from '../../hooks/useFontSize'
// import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { requestTimeout } from "../../utils/RAFTimeout";

interface ItemProps {
  text: string
  index: React.Key
  url?: string
  eid?: string | any
  urlLabel?: string | any
  isVisible?: boolean
  langCode: string
  contentText?: any
  setArticleUrl: (eid: string) => void
  setOpen: (open: boolean) => void
}

export default function Item({url, eid, urlLabel, contentText, setArticleUrl, setOpen, index, isVisible}: ItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  // const entry = useIntersectionObserver(ref, {freezeOnceVisible:false})
  // const isVisible = !!entry?.isIntersecting

  const handelOpen = useCallback(() => {
    if (eid) {
      setArticleUrl(eid)
      if (setOpen) {
        setOpen(true)
      }
    } else {
      window.open(url, '_blank')
    }
  }, [eid, setArticleUrl, setOpen, url])

  const fontSizeClass = useFontSize({
    class1: 'text-[1rem]',
    class2: 'text-[12px]',
  })
  const fontSizeClassA = useFontSize({
    class1: 'text-[1.3rem]',
    class2: 'text-[1.2rem]',
  })
  
  useEffect(()=>{
    if(isVisible) {
      requestTimeout(() => ref.current && ref.current.classList.add('animate-in'), Number(index) * 50)
    } else {
      requestTimeout(() => ref.current && ref.current.classList.remove('animate-in'), Number(index) * 50)
    }
  }, [index, isVisible])
  
  return (
    <ListItem ref={ref} className={`${fontSizeClassA} leading-7 OpenSans__font mb-3 pl-5 before:content-[attr(before)] relative`}>
      <span className="pr-3" dangerouslySetInnerHTML={{__html: contentText}} />
      <a className={`${fontSizeClass} text-[#ab5e11] cursor-pointer font-bold`} onClick={handelOpen}>
        <span dangerouslySetInnerHTML={{__html: urlLabel}} />
      </a>
    </ListItem>
  )
}
