const Message = require("../../database/model/message.model.js")
const User = require("../../database/model/user.model.js")

module.exports.index = async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/messages')
    } else {
        res.render('index.ejs', {
            loggedIn: false,
        })
    }
}

module.exports.login = async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/messages')
    } else {
        const error = req.query.error
        res.render('login.ejs', {
            error,
            loggedIn: false,
        })
    }
}

module.exports.register = async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/messages')
    } else {
        const error = req.query.error
        res.render('register.ejs', {
            loggedIn: false,
            error,
        })
    }
}

module.exports.messages = async (req, res) => {
    if (req.session.loggedIn) {
        const url = `${req.protocol}://${req.headers.host}/user/${req.session.userId}`
        const error = req.query.error
        const messages = await Message.find({ user: req.session.userId }).sort({ createdAt: -1 })
        res.render('messages.ejs', {
            userId: req.session.userId,
            username: req.session.username,
            loggedIn: true,
            error,
            messages,
            url
        })
    } else {
        res.redirect('/login')
    }
}

module.exports.user = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) return res.redirect('/index?error=User+not+found')
    const error = req.query.error
    if (req.session.loggedIn) {
        res.render('user.ejs', {
            loggedIn: req.session.loggedIn,
            username: req.session.username,
            userId: req.session.userId,
            error
        })
    } else {
        res.redirect('/login')
    }
}

module.exports.logout = async (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/index')
    })
}

module.exports.handleLogin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.redirect('/login?error=Please+provide+all+fields')
    const user = await User.findOne({ email })
    if (!user) return res.redirect('/login?error=Invalid+email+or+password')
    if (user.password !== password) return res.redirect('/login?error=Invalid+email+or+password')
    var hour = 3600000
    req.session.cookie.expires = new Date(Date.now() + hour)
    req.session.cookie.maxAge = hour
    req.session.userId = user._id
    req.session.username = user.name
    req.session.userEmail = user.email
    req.session.loggedIn = true
    res.redirect('/messages')
}

module.exports.handleRegister = async (req, res) => {
    const { name, email, password, PasswordConfirmation } = req.body
    if (!name || !email || !password || !PasswordConfirmation) return res.redirect('/register?error=Please+provide+all+fields')
    if (password !== PasswordConfirmation) return res.redirect('/register?error=Passwords+do+not+match')
    const userExists = await User.findOne({ email })
    if (userExists) return res.redirect('/register?error=Email+already+exists')
    const user = new User({ name, email, password })
    await user.save()
    res.redirect('/login')
}
module.exports.notFound = (req, res) => {
    res.render('notFound.ejs')  
}