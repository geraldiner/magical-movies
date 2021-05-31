module.exports = {
  getIndex: (req, res) => {
    const locals = {
      title: 'Home',
      layout: './layouts/main'
    }
    res.render('index', locals)
  }
}