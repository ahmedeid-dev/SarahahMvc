module.exports.index = async (req, res) => {
    res.render('index.ejs')
}
module.exports.login = async (req, res) => {
    res.render('login.ejs')
}
module.exports.logout = async (req, res) => {
    res.redirect('/index')
}
module.exports.messages = async (req, res) => {
    res.render('messages.ejs')
}
module.exports.register = async (req, res) => {
    res.render('register.ejs')
}
module.exports.user = async (req, res) => {
    res.render('user.ejs')
}
module.exports.handleLogin = async (req, res) => {
    res.redirect('/index')
}
module.exports.handleRegister = async (req, res) => {
    res.redirect('/login')
}