import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import fetchMock from 'jest-fetch-mock'
import ContactForm from '../../components/contact/contact-form'
import { act } from 'react-dom/test-utils'

describe('Testing contact-form.tsx', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  afterEach(() => {
    fetchMock.resetMocks()
  })
  let emailInput: HTMLElement
  let nameInput: HTMLElement
  let messageInput: HTMLElement
  let sendButton: HTMLElement
  let form: HTMLElement
  beforeEach(() => {
    render(<ContactForm />, { container: document.body })
    emailInput = screen.getByTestId('email-input')
    nameInput = screen.getByTestId('name-input')
    messageInput = screen.getByTestId('message-input')
    sendButton = screen.getByTestId('submit-button')
    form = screen.getByTestId('contact-form')
  })

  it('Should render the the Contact Form component', () => {
    const component = screen.getByTestId('contact-form-section')

    expect(component).toBeInTheDocument()
  })

  it('Should have all input components', async () => {
    expect(form).toBeInTheDocument()

    expect(emailInput).toBeInTheDocument()

    expect(nameInput).toBeInTheDocument()

    expect(messageInput).toBeInTheDocument()

    expect(sendButton).toBeInTheDocument()
  })

  describe('Filling and submitting form', () => {
    it('Successful submitting', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({}))

      const sendMessageHandler = jest.fn((e) => {
        e.preventDefault()
      })

      form.onsubmit = sendMessageHandler
      act(() => {
        fireEvent.change(emailInput, { target: { value: 'abc@email.com' } })
        fireEvent.change(nameInput, { target: { value: 'abc' } })
        fireEvent.change(messageInput, { target: { value: 'comment' } })
      })
      await userEvent.click(sendButton)

      expect(sendMessageHandler).toHaveBeenCalled()
      jest.runAllTimers()
    })

    it('Unsuccessful response', async () => {
      fetchMock.mockRejectOnce(new Error('Error'))
      act(() => {
        fireEvent.change(emailInput, { target: { value: 'abc@email.com' } })
        fireEvent.change(nameInput, { target: { value: 'abc' } })
        fireEvent.change(messageInput, { target: { value: 'comment' } })
      })

      await userEvent.click(sendButton)

      expect('')
    })
  })
})
