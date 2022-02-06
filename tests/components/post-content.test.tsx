import React from 'react'

import { render, screen } from '@testing-library/react'
import PostContent from '../../components/posts/post-detail/post-content'

const dummy_post = {
  title: 'Getting started with GraphQL',
  image: 'graphql.png',
  date: '2022-02-10',
  content: `
    # This is a first post
    ![Create routes via your file + folder structure](nextjs-file-based-routing.png)
    `,
  slug: 'getting-started-with-nextjs',
}

describe('Testing post-content.tsx', () => {
  it('Should render the the Post-Content component', () => {
    render(<PostContent post={dummy_post} />)
    const component = screen.getByTestId('post-content')

    expect(component).toBeInTheDocument()
  })
})
