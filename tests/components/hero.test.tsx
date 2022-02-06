import React from 'react'

import { render, screen } from '@testing-library/react'
import Hero from '../../components/home-page/hero'

describe('Testing hero.tsx', () => {
  it('Should render the the Hero component', () => {
    render(<Hero />)
    const component = screen.getByTestId('hero-section')

    expect(component).toBeInTheDocument()
  })
})
