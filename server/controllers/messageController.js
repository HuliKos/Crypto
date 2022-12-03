const bcrypt = require ('bcryptjs')
const chats = []


  module.exports ={
  createMessage: (req,res) =>{
    console.log(req.body)
    const {pin, message} = req.body
    for(let i=0; i<chats.length; i++){
      const existing = bcrypt.compareSync(pin, chats[i].pinHash)
      if(existing){
        chats[i].messages.push(message)
        let messagesToReturn = {...chats[i]}
        return res.status(200).send(messagesToReturn)
      }

    }
    const salt = bcrypt.genSaltSync(5)
    const pinHash = bcrypt.hashSync(pin,salt)
    console.log(pinHash)

    let msgObj = {
      pinHash,
      messages:[message]
    }
    chats.push(msgObj)
    let messagesToReturn = {...msgObj}
    res.status(200).send(messagesToReturn)
  }
}