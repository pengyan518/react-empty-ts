import React, {useEffect, useRef} from 'react'
// import {useAppDispatch, useAppSelector} from '../../app/hooks'
// import {RootState} from '../../app/store'
import {StickyHeaderBox} from './styles'
import config from '../../config'
import useURLSearchParams from '../../hooks/useURLSearchParams'

import StickyHeaderInfo from './StickyHeaderInfo'
import {requestTimeout} from '../../utils/RAFTimeout'
import useTargetTicketParam from '../../hooks/useTargetTicketParam'

// export type StickyheaderProps = {}
interface StickyheaderProps {
  isSticky: boolean
}

export default function StickyHeader({isSticky}: StickyheaderProps) {
  // const {content, status, showSticky} = useAppSelector((state: RootState) => state.intro)
  const city = useURLSearchParams()
  const group = useURLSearchParams('group')
  const ref = useRef<HTMLDivElement>(null)

  const link = useTargetTicketParam()

  useEffect(() => {
    if (isSticky) {
      requestTimeout(() => ref.current && ref.current.classList.add('item__fadeInDown'), 100)
      const btn = document.querySelector('.Header--MainBtn')
      if (btn) btn.setAttribute('href', link)
    } else {
      requestTimeout(() => ref.current && ref.current.classList.remove('item__fadeInDown'), 10)
    }
    return () => {
      requestTimeout(() => ref.current && ref.current.classList.remove('item__fadeInDown'), 10)
    }
  }, [isSticky, link])

  return (
    <StickyHeaderBox className={`w-full fixed z-50 top-0 opacity-0 shadow-md`} ref={ref}>
      <div className="grid grid-cols-[auto_130px] md:grid-cols-[auto_240px] py-2 px-4 items-center">
        <div className="flex">{(city || group) && <StickyHeaderInfo />}</div>
      </div>
    </StickyHeaderBox>
  )
}
