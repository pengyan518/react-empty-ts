import React, {useEffect, useCallback, useState, useLayoutEffect, useRef, createRef, useMemo} from 'react'
import axios from 'axios'
import {useQuery, useQueryClient, QueryClient, QueryClientProvider} from '@tanstack/react-query'

import {useAppDispatch, useAppSelector} from '../../app/hooks'

import config from '../../config'
// import {Box, DialogInner, Wrapper, Close, ViewAs, Header, NextBtn, PrevBtn, Title} from './styles'

import {ContentProps} from '../../types'
import {RootState} from '../../app/store'
import Loading from '../Loading'
import useURLSearchParams from '../../hooks/useURLSearchParams'
import usePosts from '../../hooks/usePosts'

// interface PostProps {
//   eid: string | any
// }

export default function City() {
  const {
    content: {translation},
  } = useAppSelector<ContentProps>((state: RootState) => state.intro)

  const {cityContent} = useAppSelector((state: RootState) => state.sticky)

  const city = useURLSearchParams()

  return <div className="">t</div>
}
