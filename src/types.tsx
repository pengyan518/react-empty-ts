export interface ContentProps {
  content: {
    contentExt: {
      body: any
      miscData: {
        about_us: string
        about_us_title: string
        discover_more: string
        global_sensation: string
        global_sensation_quote: string
        timeline: string
        timeline_2nd: string
        promoVideo: string
      }
    }
    translation: any
    title: any
    langCode: string
  }
  status: string
  articles: string[] | null
  currentArticle: string | null
}

export interface LangProps {
  readonly langCode: string
}

export interface ListItemProps {
  readonly ref: any
}