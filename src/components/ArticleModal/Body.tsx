import React, { useEffect, useRef } from "react";
import {Box} from './styles'
import appendHtml from '../../utils/appendHtml'

interface BodyProps {
  html:any
}
export default function Body({html}:BodyProps) {
  const append = useRef(false)
  useEffect(() => {
    const innerImage = document.querySelectorAll('.sy-image')
    if (innerImage.length > 0 && !append.current) {
      innerImage.forEach(img => {
        const parent: HTMLElement | null = img.parentElement
        const imageClass:string | null = img.getAttribute('data-style')
        const caption = img.getAttribute('data-caption')

        if(parent && imageClass) {
          parent.classList.add(imageClass)
        }

        if (caption) {
          appendHtml(parent, `<div class="content-figcaption"><div class="figcaption-txt">${caption}</div></div><div></div>`)
          append.current = true
        }
      })
      console.debug('appendHtml')
    }
  }, [])
  return <Box dangerouslySetInnerHTML={{__html: html}} />
}
