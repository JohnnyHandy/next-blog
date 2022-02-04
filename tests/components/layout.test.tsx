﻿import React from 'react'

import { render, screen } from '@testing-library/react'
import Layout from '../../components/layout/layout'

describe('Testing hero.tsx', () => {
  it('Should render the main navigation in the Layout component', () => {
    render(<Layout>Mck</Layout>)
    const component = screen.getByTestId('main-navigation')

    expect(component).toBeInTheDocument()
  })
})