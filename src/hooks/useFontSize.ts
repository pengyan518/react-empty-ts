import {useMemo} from 'react'
import config from '../config'
import {useAppSelector} from '../app/hooks'
import {ContentProps} from '../types'
import {RootState} from '../app/store'

interface FontSizeProps {
  spectialLangs?: string[]
  class1: string
  class2?: string
}

const useFontSize = ({spectialLangs = config.cnLang, class1, class2}: FontSizeProps): string => {
  const {content} = useAppSelector<ContentProps>((state: RootState) => state.intro)
  const {langCode} = content

  return useMemo(() => (spectialLangs.includes(langCode) ? class1 : class2 || ''), [class1, class2, langCode, spectialLangs])
}

export default useFontSize
