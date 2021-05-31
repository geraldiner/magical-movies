module.exports = {
  getLogin: (req, res) => {
    const locals = {
      title: 'Login',
      layout: './layouts/main'
    }
    res.render('login', locals)
  },
  postLogin: (req, res) => {
    const locals = {
      title: 'Login',
      layout: './layouts/main'
    }
  },
  getSignup: (req, res) => {
    const locals = {
      title: 'Login',
      layout: './layouts/main'
    }
    res.render('login', locals)
  },
  postSignup: (req, res) => {
    const locals = {
      title: 'Login',
      layout: './layouts/main'
    }
    res.render('login', locals)
  }
}