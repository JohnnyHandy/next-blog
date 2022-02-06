import React from 'react'

import { render, screen } from '@testing-library/react'
import PostItem from '../../components/posts/post-item'

const DUMMY_POST = {
  title: 'Getting started with GraphQL',
  image: 'graphql.png',
  excerpt:
    "GraphQL is a new layer of data that came to revolutionize web's development and user experience",
  date: '2022-02-10',
  slug: 'getting-started-with-graphql',
}

describe('Testing post-item.tsx', () => {
  it('Should render the the Post-Item component', () => {
    render(<PostItem post={DUMMY_POST} />)
    const component = screen.getByTestId('post-item')

    expect(component).toBeInTheDocument()
  })
})
