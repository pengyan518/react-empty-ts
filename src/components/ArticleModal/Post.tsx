import React, {useEffect, useCallback, useState, useLayoutEffect, useRef, createRef, useMemo} from 'react'
import axios from 'axios'
import {useQuery, useQueryClient, QueryClient, QueryClientProvider} from '@tanstack/react-query'

import {useAppDispatch, useAppSelector} from '../../app/hooks'

import config from '../../config'
import {Box, DialogInner, Wrapper, Close, ViewAs, Header, NextBtn, PrevBtn, Title} from './styles'
import Hero from './Hero'
import useDisabled from '../../hooks/useDisabled'
import Body from './Body'
import { ContentProps } from "../../types";
import { RootState } from "../../app/store";
import Loading from "../Loading";

const getPostById = async (id: string) => {
  const {data} = await axios.get(`${config.article}${id}`)
  return data
}

function usePost(postId: string) {
  return useQuery(['post', postId], () => getPostById(postId), {
    enabled: !!postId,
  })
}

interface PostProps {
  eid: string | any
}

export default function Post({eid}: PostProps) {
  const {content: {translation}} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  const {status, data, error, isFetching} = usePost(eid)

  return (
    <div>
      {/* eslint-disable-next-line no-nested-ternary */}
      {!eid || status === 'loading' ? (
        <Loading height="100vh" width="100%" color="#1976d2" background="transparent" />
      ) : status === 'error' ? ( // @ts-ignore
        <span>Error: {error.message}</span>
      ) : (
        <>
          <Header>
            <ViewAs className="font-bold text-sm cursor-pointer text-purple-700" href={`/reviews/view/article/e/${eid}`}>
               {translation['View as article']}
            </ViewAs>
          </Header>
          <Hero contentApi={data.ext} videoLink={data.ext.videoLink?data.ext.videoLink:null} />
          <Title>{data.title}</Title>
          {data.ext?.body && <Body html={data.ext.body} />}
          {data.ext?.text && <Body html={data.ext.text} />}
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  )
}
