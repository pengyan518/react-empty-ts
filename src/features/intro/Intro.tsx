import React, {useEffect, useState} from 'react'

import {useAppSelector, useAppDispatch} from '../../app/hooks'
import {fetchInitial} from './introSlice'
import TopArea from '../../components/TopArea'
import {RootState} from '../../app/store'
import Loading from '../../components/Loading'


function Intro() {
  const {content, status, showSticky} = useAppSelector((state: RootState) => state.intro)
  const dispatch = useAppDispatch()


  useEffect(() => {
    if (status === 'initial') dispatch(fetchInitial())
  }, [content, dispatch, status])

  if (!content)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loading height="100vh" width="100%" color="#fff" background="#29488f" />
      </div>
    )

  return (
    <>
      <div className="bg-[#f8f5ec] overflow-x-hidden" lang={content.langCode}>
        <TopArea />
      </div>
    </>
  )
}

export default Intro
