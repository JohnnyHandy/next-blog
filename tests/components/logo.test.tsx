﻿import React from 'react'

import { render, screen } from '@testing-library/react'
import Logo from '../../components/layout/logo'

describe('Testing logo.tsx', () => {
  it('Should render the the Logo component', () => {
    render(<Logo />)
    const component = screen.getByTestId('logo')

    expect(component).toBeInTheDocument()
  })
})