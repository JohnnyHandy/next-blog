import React from 'react'

import { render, screen } from '@testing-library/react'
import FeaturedPosts from '../../components/home-page/featured-posts'

describe('Testing featured-psots.tsx', () => {
  it('Should render the the Featured Posts component', () => {
    render(<FeaturedPosts posts={[]} />)
    const component = screen.getByTestId('featured-posts-section')

    expect(component).toBeInTheDocument()
  })
})