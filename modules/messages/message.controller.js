const Message = require("../../database/model/message.model.js")
const User = require("../../database/model/user.model.js")

module.exports.sendMessage = async (req, res) => {
    const { message } = req.body
    const userId = req.params.id
    message.length < 3 && res.redirect(`/user/${req.params.id}?error=Message+is+to+short`)
    const user = await User.findById(userId)
    !user && res.redirect('/index?error=User+not+found')
    const msg = await Message.create({ message, user: userId })
    res.redirect('/messages')
}