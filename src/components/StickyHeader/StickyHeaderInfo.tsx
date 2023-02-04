import React, {useEffect, useRef, useState} from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import {Skeleton} from '@mui/material'

import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import {StickyHeaderBox} from './styles'
import usePosts from '../../hooks/usePosts'
import config from '../../config'
import useURLSearchParams from '../../hooks/useURLSearchParams'
import Loading from '../Loading'
import {setCityContent, setGroupContent} from './stickySlice'

// export type StickyheaderProps = {}

export default function StickyHeaderInfo() {
  const [eventData, setEventData] = useState<any>(null)
  // const {content, status, showSticky} = useAppSelector((state: RootState) => state.intro)
  const city = useURLSearchParams()
  const group = useURLSearchParams('group')
  // const urlAlias = city ?? group
  const url = city ? `${config.getEventInfoAction}?city=${city}` : `${config.getEventInfoAction}?group=${group}`

  // const url = city
  //   ? `//${config.crossdomain}${city}${config.getCityApi}`
  //   : `//${config.crossdomain}${group}${config.cityGroupInfoListAction}`

  const queryKey = city ? 'city' : 'group'
  const {status, data, error, isFetching} = usePosts(url, [queryKey])
  // const {status, data, error, isFetching} = usePosts(`//${config.crossdomain}event/ajax-get-upcoming-events`, ['city'])
  const dispatch = useAppDispatch()
  // console.debug(url)

  useEffect(() => {
    if (status !== 'loading' && status !== 'error') {
      setEventData(JSON.parse(data))
      if (city) {
        dispatch(setCityContent(eventData))
      } else {
        dispatch(setGroupContent(eventData))
      }
    }
  }, [city, data, dispatch, status])

  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {status === 'loading' ? (
        <div className="grid md:flex gap-x-3 open-sans-c items-center md:pl-6">
          <Skeleton variant="rectangular" width={210} height={20} />
          <Skeleton variant="rectangular" width={100} height={20} />
        </div>
      ) : status === 'error' ? ( // @ts-ignore
        <span>Error: {error.message}</span>
      ) : (
        <>
          {city && eventData && eventData?.cityData && (
            // <div className="grid md:flex gap-x-3 open-sans-c items-center md:pl-6">
            //   <Skeleton variant="rectangular" width={210} height={20} />
            //   <Skeleton variant="rectangular" width={100} height={20} />
            // </div>
            <div className="grid md:flex gap-x-3 open-sans-c items-center md:pl-6">
              <div className="font-bold text-base md:text-[1.125rem] leading-none">
                Shen Yun 2023 in <span dangerouslySetInnerHTML={{__html: eventData.cityData.cityName}} />
              </div>
              <div className="grid md:flex md:divide-x divide-slate-800 md:gap-x-3 leading-none">
                <div
                  className="text-sm md:text-[1.125rem] leading-none"
                  dangerouslySetInnerHTML={{__html: eventData.cityData.theaterName}}
                />
                <div
                  className="text-sm md:text-[1.125rem] md:pl-3 leading-none"
                  dangerouslySetInnerHTML={{__html: eventData.cityData.showSchedule}}
                />
              </div>
            </div>
          )}
          {group && eventData && (
            <div className="grid md:flex gap-x-3 open-sans-c items-center md:pl-6">
              <div className="font-bold text-sm md:text-[1.125rem] md:leading-none">
                <span dangerouslySetInnerHTML={{__html: eventData.name}} />
              </div>
              <div className="grid md:flex md:divide-x divide-slate-800 md:gap-x-3 leading-none"></div>
            </div>
          )}
        </>
      )}
    </>
  )
}
