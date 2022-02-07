/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextApiRequest, NextApiResponse } from 'next'
import {
  createMocks as _createMocks,
  Mocks,
  RequestOptions,
  ResponseOptions,
} from 'node-mocks-http'
import { MongoClient } from 'mongodb'

import contact from '../../../pages/api/contact'

const createMocks = _createMocks as (
  reqOptions?: RequestOptions,
  resOptions?: ResponseOptions
  // @ts-ignore: Fixing this: https://github.com/howardabrams/node-mocks-http/issues/245
) => Mocks<NextApiRequest, NextApiResponse>

describe('Test responses for contact api', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('Should return status 422 on invalid body', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      //@ts-ignore
      body: JSON.stringify({
        email: 'abcemail.com',
      }),
    })
    await contact(req, res)
    expect(res._getStatusCode()).toBe(422)
  })

  it('Should retun status 201 on valid body ', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      //@ts-ignore
      body: JSON.stringify({
        email: 'abc@email.com',
        name: 'myname',
        message: 'message',
      }),
    })
    const insertOne = jest.fn().mockResolvedValueOnce({ acknowleged: true })
    const collection = jest.fn().mockReturnValueOnce({ insertOne })
    const connectSpy = jest
      .spyOn(MongoClient, 'connect')
      .mockResolvedValueOnce({
        //@ts-ignore
        db: jest.fn().mockReturnValueOnce({ collection }),
        //@ts-ignore
        close: jest.fn(),
      })

    await contact(req, res)
    expect(connectSpy).toHaveBeenCalled()
    expect(res._getStatusCode()).toBe(201)
  })

  it('Should return staus 500 on error when connecting to database', async () => {
    //@ts-ignore
    const { req, res } = createMocks({
      method: 'POST',
      //@ts-ignore
      body: JSON.stringify({
        email: 'abc@email.com',
        name: 'myname',
        message: 'message',
      }),
    })

    const connectSpy = jest
      .spyOn(MongoClient, 'connect')
      //@ts-ignore
      .mockRejectedValueOnce(new Error())

    await contact(req, res)

    expect(connectSpy).toHaveBeenCalled()
    expect(res._getStatusCode()).toBe(500)
  })
})
