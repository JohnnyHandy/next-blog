import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from 'mongodb'

async function handler(req: NextApiRequest, res: NextApiResponse){
        const { email, name, message } = JSON.parse(req.body)
        if(!email || !email.includes('@') || !name || name.trim() == '' || !message || message.trim() === '') {
            res.status(422).json({ message: 'Invalid input' })
            return
        }

        const newMessage: {
            email: string
            name: string
            message: string
            id?: ObjectId
        } = {
            email,
            name,
            message
        };
        let client
        try {
            client = await MongoClient.connect(
            `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.6rimh.mongodb.net/blog?retryWrites=true&w=majority`
            )
            const db = client?.db('my-blog')
            const result = await db?.collection('messages').insertOne(newMessage)
            newMessage.id = result.insertedId

        } catch(e) {
            client?.close()
            res.status(500).json({ message: 'Could not connect to database' })
            return
        }

        client.close()
        res.status(201).json({ message: 'Successfully stored message!', newmessage: newMessage })
}

export default handler