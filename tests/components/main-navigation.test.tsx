import React from 'react'

import { render, screen } from '@testing-library/react'
import MainNavigation from '../../components/layout/main-navigation'

describe('Testing main-navigation.tsx', () => {
  it('Should render the the Main Navigation component', () => {
    render(<MainNavigation />)
    const component = screen.getByTestId('main-navigation')

    expect(component).toBeInTheDocument()
  })
})
