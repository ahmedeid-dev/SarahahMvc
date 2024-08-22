const User = require("../../database/model/user.model.js")

module.exports.index = async (req, res) => {
    res.render('index.ejs')
}

module.exports.login = async (req, res) => {
    const error = req.query.error
    res.render('login.ejs', { error })
    res.render('login.ejs')
}

module.exports.messages = async (req, res) => {
    res.render('messages.ejs')
}

module.exports.register = async (req, res) => {
    const error = req.query.error
    res.render('register.ejs', { error })
}

module.exports.user = async (req, res) => {
    res.render('user.ejs')
}

module.exports.logout = async (req, res) => {
    res.redirect('/index')
}

module.exports.handleLogin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.redirect('/login?error=Please+provide+all+fields')
    const user = await User.findOne({ email })
    if (!user) return res.redirect('/login?error=Invalid+email+or+password')
    if (user.password !== password) return res.redirect('/login?error=Invalid+email+or+password')
    res.redirect('/messages')
}

module.exports.handleRegister = async (req, res) => {
    const { name, email, password, PasswordConfirmation } = req.body
    if (!name || !email || !password || !PasswordConfirmation) return res.redirect('/register?error=Please+provide+all+fields')
    if (password !== PasswordConfirmation) return res.redirect('/register?error=Passwords+do+not+match')
    const userExists = await User.findOne({ email })
    if (userExists ) return res.redirect('/register?error=Email+already+exists')
    const user = new User({ name, email, password })
    await user.save()
    res.redirect('/login')
}