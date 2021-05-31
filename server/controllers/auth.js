module.exports = {
  getLogin: (req, res) => {
    const locals = {
      title: 'Login',
      layout: './layouts/main'
    }
    res.render('login', locals)
  },
  getSignup: (req, res) => {
    const locals = {
      title: 'Login',
      layout: './layouts/main'
    }
    res.render('login', locals)
  }
}