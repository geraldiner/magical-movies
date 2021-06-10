module.exports = {
  getIndex: (req, res) => {
    res.render(path.resolve(__dirname, '../../client/build/index.html'))
  }
}