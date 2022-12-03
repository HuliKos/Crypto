const express = require('express')
const cors = require ('cors')

const app = express()

app.use(express.json())
app.use(cors())


const {createMessage} = require ('./controllers/messageController')

app.post('/api/messages', createMessage)

const SEVER_PORT = 4004
app.listen(SEVER_PORT, () => console.log(`server is working on ${SEVER_PORT}`))
