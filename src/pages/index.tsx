function IndexPage({ pageContext }: Props) {
  const { tutorials, formats, topics, authors, sources } = pageContext

  return (
    <Base>
      <Main>
        <Directory
          tutorials={tutorials}
          formats={formats}
          topics={topics}
          authors={authors}
          sources={sources}
        />
      </Main>
    </Base>
  )
}

interface Props {
  pageContext: {
    tutorials: Array<Tutorial>
    formats: Array<string>
    topics: Array<string>
    authors: Array<string>
    sources: Array<string>
  }
}

///////////////////////////////////////////////////////////////////////////////////

const Main = styled.main`
  background-color: var(--near-white);
  min-height: 75vh;
  font-family: var(--bodyFont);
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import Base from '../components/Base'
import Directory from '../components/Directory'
import { Tutorial } from '../types'

export default IndexPage
