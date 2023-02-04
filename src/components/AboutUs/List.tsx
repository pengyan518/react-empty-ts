import React, {Children, ReactNode, useEffect, useMemo, useRef, useState} from 'react'
import {ListUl} from './styles'
import {setArticles} from '../../features/intro/introSlice'
import {useAppDispatch} from '../../app/hooks'
import useUrlParameter from '../../hooks/useUrlParameter'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import {requestTimeout} from '../../utils/RAFTimeout'

export type ListProps = {
  children: ReactNode
  label: string
}

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children)
    .slice(1)
    .filter(child => React.isValidElement(child)) as React.ReactElement[]
}

export default function List({children, label}: ListProps) {
  const header = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const entry = useIntersectionObserver(ref, {freezeOnceVisible: false})
  const isVisible = !!entry?.isIntersecting
  const [isVisibleState, setIsVisibleState] = useState(isVisible)

  // const eids: any[]= useMemo(()=>([]), [])
  const eids: any[] = []
  const dispatch = useAppDispatch()
  const myItems = getValidChildren(children)

  const items = React.Children.map(myItems, (child: any) => {
    const myContent = child.props.text?.split('##')
    const string = myContent && myContent[1] ? myContent[1].split('#') : []
    const urlLabel = string[0]
    const url = string[1]
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const eid = url ? useUrlParameter(url, 'e') : null
    // dispatch()
    if (eid) eids.push(eid)
    return React.cloneElement(child as React.ReactElement<any>, {url, eid, urlLabel, isVisible: isVisibleState, contentText: myContent[0]})
  })

  // React.Children.forEach(myItems, child => {
  //   const myContent = child.props.text.split('##')
  //   const string = myContent[1].split('#')
  //   const url = string[1]
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const eid = useUrlParameter(url, 'e')
  //   eids.push(eid)
  // })
  useEffect(() => {
    if (isVisible) {
      requestTimeout(() => header.current && header.current.classList.add('item__fadeIn'), 150)
      requestTimeout(() => setIsVisibleState(true), 200)
    } else {
      requestTimeout(() => header.current && header.current.classList.remove('item__fadeIn'), 50)
      setIsVisibleState(false)
      // requestTimeout(()=>setIsVisibleState(false), 900)
    }
  }, [isVisible])

  useEffect(() => {
    if (eids.length > 0) {
      dispatch(setArticles(eids))
    }
  }, [dispatch])

  return (
    <div className="px-8 py-8 lg:px-24 lg:py-24 2xl:w-10/12">
      <h3
        ref={header}
        className={`aboutUsTitle translate-x-[180px] opacity-0 text-[#ab5e11] font-medium text-4xl Garamond__font leading-none mt-6 md:mt-0 mb-10 `}
        dangerouslySetInnerHTML={{__html: label}}
      />

      <ListUl className="z-10" ref={ref}>
        {items}
      </ListUl>
    </div>
  )
}
