import React from 'react'
import { render, screen } from '@testing-library/react'
import PostHeader from '../../components/posts/post-detail/post-header'

const dummy_post =    {
    title: 'Getting started with GraphQL',
    image: 'graphql.png',
    date: '2022-02-10',
    content: '# This is a first post',
    slug: 'getting-started-with-graphql'

}

const imagePath = `/images/posts${dummy_post.slug}/${dummy_post.image}`

describe('Testing post-header.tsx', () => {
  it('Should render the the Post-Header component', () => {
    render(<PostHeader title='title' image={imagePath} />)
    const component = screen.getByTestId('post-header')

    expect(component).toBeInTheDocument()
  })
})