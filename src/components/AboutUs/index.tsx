import React, {ReactNode, useCallback, useRef, useState} from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import {useAppSelector} from '../../app/hooks'
import {RootState} from '../../app/store'
import {Figure} from './styles'
import Item from './Item'
import List from './List'
import useIntersectionProgressiveImg from '../../hooks/useIntersectionObserverProgressiveImg'
import bg from '../../assets/images/audience.jpg'
import bgsm from '../../assets/images/audience_sm.jpg'
import ArticleModal from '../ArticleModal'
import { ContentProps } from "../../types";



const style = {
  position: 'absolute' as const,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
}

export default function Index() {
  const {content, articles} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  const {title, contentExt, translation, langCode} = content
  const {body, miscData} = contentExt
  const {about_us, about_us_title} = miscData
  const {src, ref, blur, isVisible} = useIntersectionProgressiveImg(bgsm, bg)
  const [articleEid, setArticleEid] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const handleClose = useCallback(() => setOpen(false), [])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] bg-[#f1c769]">
        <Figure
          ref={ref}
          className={`order-2 md:order-1 aspect-w-[1.23] aspect-h-1 ${isVisible && !blur ? 'progressive--is-loaded' : 'progressive--not-loaded'}`}
          dataSrc={src}
        />
        <div className="order-1 md:order-2">

            <List label={about_us_title}>
              {about_us.split('###').map((item: string, index: React.Key) => (
                <Item text={item} key={index} index={index} setArticleUrl={setArticleEid} setOpen={setOpen} langCode={langCode} />
              ))}
            </List>

        </div>
      </div>
      {articleEid && open && (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <ArticleModal eid={articleEid} handleClose={handleClose} setArticleEid={setArticleEid} />
          </Box>
        </Modal>
      )}
    </>
  )
}
