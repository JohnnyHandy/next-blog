import React from 'react'

import { render, screen } from '@testing-library/react'
import PostsGrid from '../../components/posts/posts-grid'

const DUMMY_POST = [
    {
      title: 'Getting started with GraphQL',
      image: 'graphql.png',
      excerpt: 'GraphQL is a new layer of data that came to revolutionize web\'s development and user experience',
      date: '2022-02-10',
      slug: 'getting-started-with-graphql'
    }
]

describe('Testing posts-grid.tsx', () => {
  it('Should render the the Posts-Grid component', () => {
    render(<PostsGrid posts={DUMMY_POST} />)
    const component = screen.getByTestId('posts-grid')

    expect(component).toBeInTheDocument()
  })
})